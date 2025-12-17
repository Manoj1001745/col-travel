import React, { useState, useEffect, useRef } from "react";
import {
  Plane,
  ArrowLeftRight,
  Users,
  Globe,
  CalendarDays,
  Search,
} from "lucide-react";
import "./FlightSearch.css";

interface FlightSearchProps {
  className?: string;
}

interface City {
  code: string;
  name: string;
  country: string;
}

const FlightSearch: React.FC<FlightSearchProps> = ({ className }) => {
  const [tripType, setTripType] = useState<"oneWay" | "roundTrip">("oneWay");
  const [fromCity, setFromCity] = useState("KTM");
  const [fromCityName, setFromCityName] = useState("KATHMANDU");
  const [toCity, setToCity] = useState("PKR");
  const [toCityName, setToCityName] = useState("POKHARA");
  const [departureDate, setDepartureDate] = useState("2025-11-27");
  const [returnDate, setReturnDate] = useState("2025-11-30");
  const [passengers, setPassengers] = useState(1);
  const [passengerClass, setPassengerClass] = useState("Economy");
  const [nationality, setNationality] = useState("");

  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showNationalityDropdown, setShowNationalityDropdown] = useState(false);

  const [fromSearchQuery, setFromSearchQuery] = useState("");
  const [toSearchQuery, setToSearchQuery] = useState("");
  const [nationalitySearchQuery, setNationalitySearchQuery] = useState("");

  const fromDropdownRef = useRef<HTMLDivElement>(null);
  const toDropdownRef = useRef<HTMLDivElement>(null);
  const passengerDropdownRef = useRef<HTMLDivElement>(null);
  const nationalityDropdownRef = useRef<HTMLDivElement>(null);

  const cities: City[] = [
    { code: "KTM", name: "KATHMANDU", country: "Nepal" },
    { code: "PKR", name: "POKHARA", country: "Nepal" },
    { code: "BKK", name: "BANGKOK", country: "Thailand" },
    { code: "DEL", name: "DELHI", country: "India" },
    { code: "DXB", name: "DUBAI", country: "UAE" },
    { code: "DOH", name: "DOHA", country: "Qatar" },
    { code: "KUL", name: "KUALA LUMPUR", country: "Malaysia" },
    { code: "SIN", name: "SINGAPORE", country: "Singapore" },
    { code: "HKG", name: "HONG KONG", country: "Hong Kong" },
    { code: "LKO", name: "LUCKNOW", country: "India" },
    { code: "BOM", name: "MUMBAI", country: "India" },
    { code: "CCU", name: "KOLKATA", country: "India" },
  ];

  const nationalities = [
    "Nepali",
    "Indian",
    "American",
    "British",
    "Canadian",
    "Australian",
    "Chinese",
    "Japanese",
    "Korean",
    "Thai",
    "Malaysian",
    "Singaporean",
  ];

  const classes = ["Economy", "Premium Economy", "Business", "First Class"];

  const handleSwapCities = () => {
    const tempCity = fromCity;
    const tempCityName = fromCityName;
    setFromCity(toCity);
    setFromCityName(toCityName);
    setToCity(tempCity);
    setToCityName(tempCityName);
  };

  const selectFromCity = (city: City) => {
    setFromCity(city.code);
    setFromCityName(city.name);
    setShowFromDropdown(false);
    setFromSearchQuery("");
  };

  const selectToCity = (city: City) => {
    setToCity(city.code);
    setToCityName(city.name);
    setShowToDropdown(false);
    setToSearchQuery("");
  };

  // Filter cities based on search query
  const filterCities = (query: string) => {
    if (!query.trim()) return cities;
    const lowerQuery = query.toLowerCase();
    return cities.filter(
      (city) =>
        city.code.toLowerCase().includes(lowerQuery) ||
        city.name.toLowerCase().includes(lowerQuery) ||
        city.country.toLowerCase().includes(lowerQuery)
    );
  };

  const filteredFromCities = filterCities(fromSearchQuery);
  const filteredToCities = filterCities(toSearchQuery);

  // Filter nationalities based on search query
  const filteredNationalities = nationalitySearchQuery.trim()
    ? nationalities.filter((nat) =>
        nat.toLowerCase().includes(nationalitySearchQuery.toLowerCase())
      )
    : nationalities;

  const handleSearch = () => {
    console.log("Searching flights:", {
      tripType,
      from: `${fromCity} - ${fromCityName}`,
      to: `${toCity} - ${toCityName}`,
      departure: departureDate,
      return: tripType === "roundTrip" ? returnDate : null,
      passengers,
      class: passengerClass,
      nationality,
    });
    alert(
      "Flight search functionality will be implemented with backend integration."
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fromDropdownRef.current &&
        !fromDropdownRef.current.contains(event.target as Node)
      ) {
        setShowFromDropdown(false);
      }
      if (
        toDropdownRef.current &&
        !toDropdownRef.current.contains(event.target as Node)
      ) {
        setShowToDropdown(false);
      }
      if (
        passengerDropdownRef.current &&
        !passengerDropdownRef.current.contains(event.target as Node)
      ) {
        setShowPassengerDropdown(false);
      }
      if (
        nationalityDropdownRef.current &&
        !nationalityDropdownRef.current.contains(event.target as Node)
      ) {
        setShowNationalityDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={`flight-search-wrapper ${className || ""}`}>
      <div className="flight-search-card">
        <div className="flight-search-header">
          <div className="trip-type-tabs">
            <button
              className={`trip-type-tab ${
                tripType === "oneWay" ? "active" : ""
              }`}
              onClick={() => setTripType("oneWay")}
            >
              One Way
            </button>
            <button
              className={`trip-type-tab ${
                tripType === "roundTrip" ? "active" : ""
              }`}
              onClick={() => setTripType("roundTrip")}
            >
              Round Trip
            </button>
          </div>

          <div className="nationality-selector">
            <span className="nationality-label">
              Select Nationality (Required)
            </span>
            <div
              className="nationality-dropdown-wrapper"
              ref={nationalityDropdownRef}
            >
              <button
                className="nationality-button"
                onClick={() =>
                  setShowNationalityDropdown(!showNationalityDropdown)
                }
              >
                <Globe className="icon" />
                <span>{nationality || "Select Nationality"}</span>
              </button>
              {showNationalityDropdown && (
                <div className="dropdown-menu nationality-menu">
                  <div className="dropdown-search">
                    <Search className="search-icon-small" />
                    <input
                      type="text"
                      placeholder="Search nationality..."
                      value={nationalitySearchQuery}
                      onChange={(e) =>
                        setNationalitySearchQuery(e.target.value)
                      }
                      onClick={(e) => e.stopPropagation()}
                      autoFocus
                    />
                  </div>
                  <div className="dropdown-cities-list">
                    {filteredNationalities.length > 0 ? (
                      filteredNationalities.map((nat) => (
                        <div
                          key={nat}
                          className="dropdown-item"
                          onClick={() => {
                            setNationality(nat);
                            setShowNationalityDropdown(false);
                            setNationalitySearchQuery("");
                          }}
                        >
                          {nat}
                        </div>
                      ))
                    ) : (
                      <div className="no-results">No nationality found</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flight-search-content">
          <div className="location-row">
            <div className="input-group">
              <label className="input-label">FROM</label>
              <div className="location-dropdown-wrapper" ref={fromDropdownRef}>
                <div
                  className="location-input clickable"
                  onClick={() => {
                    setShowFromDropdown(!showFromDropdown);
                    setShowToDropdown(false);
                  }}
                >
                  <Plane className="icon" />
                  <div className="location-details">
                    <div className="city-code">{fromCity}</div>
                    <div className="city-name">{fromCityName}</div>
                  </div>
                </div>
                {showFromDropdown && (
                  <div className="dropdown-menu city-menu">
                    <div className="dropdown-search">
                      <Search className="search-icon-small" />
                      <input
                        type="text"
                        placeholder="Search city..."
                        value={fromSearchQuery}
                        onChange={(e) => setFromSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                      />
                    </div>
                    <div className="dropdown-cities-list">
                      {filteredFromCities.length > 0 ? (
                        filteredFromCities.map((city) => (
                          <div
                            key={city.code}
                            className="dropdown-item city-item"
                            onClick={() => selectFromCity(city)}
                          >
                            <div className="city-code">{city.code}</div>
                            <div className="city-info">
                              <div className="city-name">{city.name}</div>
                              <div className="city-country">{city.country}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="no-results">No cities found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <button
              className="swap-button"
              onClick={handleSwapCities}
              aria-label="Swap cities"
            >
              <ArrowLeftRight className="icon" />
            </button>

            <div className="input-group">
              <label className="input-label">TO</label>
              <div className="location-dropdown-wrapper" ref={toDropdownRef}>
                <div
                  className="location-input clickable"
                  onClick={() => {
                    setShowToDropdown(!showToDropdown);
                    setShowFromDropdown(false);
                  }}
                >
                  <Plane className="icon rotate-45" />
                  <div className="location-details">
                    <div className="city-code">{toCity}</div>
                    <div className="city-name">{toCityName}</div>
                  </div>
                </div>
                {showToDropdown && (
                  <div className="dropdown-menu city-menu">
                    <div className="dropdown-search">
                      <Search className="search-icon-small" />
                      <input
                        type="text"
                        placeholder="Search city..."
                        value={toSearchQuery}
                        onChange={(e) => setToSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                      />
                    </div>
                    <div className="dropdown-cities-list">
                      {filteredToCities.length > 0 ? (
                        filteredToCities.map((city) => (
                          <div
                            key={city.code}
                            className="dropdown-item city-item"
                            onClick={() => selectToCity(city)}
                          >
                            <div className="city-code">{city.code}</div>
                            <div className="city-info">
                              <div className="city-name">{city.name}</div>
                              <div className="city-country">{city.country}</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="no-results">No cities found</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="details-row">
            <div className="input-group">
              <label className="input-label">DEPARTURE</label>
              <div
                className="date-input-wrapper"
                onClick={() =>
                  (
                    document.getElementById(
                      "departure-date"
                    ) as HTMLInputElement
                  )?.showPicker?.()
                }
              >
                <CalendarDays className="calendar-icon" />
                <input
                  id="departure-date"
                  type="date"
                  className="date-input"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">RETURN</label>
              <div
                className="date-input-wrapper"
                onClick={() =>
                  tripType !== "oneWay" &&
                  (
                    document.getElementById("return-date") as HTMLInputElement
                  )?.showPicker?.()
                }
              >
                <CalendarDays className="calendar-icon" />
                <input
                  id="return-date"
                  type="date"
                  className="date-input"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  min={departureDate}
                  disabled={tripType === "oneWay"}
                />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">PASSENGERS</label>
              <div
                className="passenger-dropdown-wrapper"
                ref={passengerDropdownRef}
              >
                <div
                  className="passenger-input clickable"
                  onClick={() =>
                    setShowPassengerDropdown(!showPassengerDropdown)
                  }
                >
                  <Users className="icon" />
                  <div className="passenger-details">
                    <div className="passenger-count">
                      {passengers} Traveler{passengers > 1 ? "s" : ""}
                    </div>
                    <div className="passenger-class">{passengerClass}</div>
                  </div>
                </div>
                {showPassengerDropdown && (
                  <div className="dropdown-menu passenger-menu">
                    <div className="passenger-controls">
                      <label>Travelers</label>
                      <div className="counter-controls">
                        <button
                          onClick={() =>
                            setPassengers(Math.max(1, passengers - 1))
                          }
                          disabled={passengers <= 1}
                        >
                          -
                        </button>
                        <span>{passengers}</span>
                        <button
                          onClick={() =>
                            setPassengers(Math.min(9, passengers + 1))
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="class-selector">
                      <label>Class</label>
                      {classes.map((cls) => (
                        <div
                          key={cls}
                          className={`class-option ${
                            passengerClass === cls ? "active" : ""
                          }`}
                          onClick={() => setPassengerClass(cls)}
                        >
                          {cls}
                        </div>
                      ))}
                    </div>
                    <button
                      className="done-button"
                      onClick={() => setShowPassengerDropdown(false)}
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <button className="search-button" onClick={handleSearch}>
            <svg
              className="search-icon"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19 19L14.65 14.65"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Search Flights
          </button>
        </div>
      </div>

      <div className="flight-note">
        <div className="note-icon">ℹ️</div>
        <p>
          <strong>Note:</strong> Please contact us for flight bookings to all
          remote sectors, including{" "}
          <strong>
            Lukla, Jomsom, Phaplu, Lamidada, Taplejung, Rumjatar, Simikot,
            Dolpa, Jumla, Rara, Bajura, Bajhang, Doti, Darchula,
          </strong>{" "}
          and all other mountain and remote-region destinations.
        </p>
      </div>
    </div>
  );
};

export default FlightSearch;
