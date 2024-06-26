import { useEffect, useState } from "react";
import api from "../../api/api";
import { TCountry } from "../../types/country.type";
import CountryCard from "../CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await api.country.getCountries();
      setCountries(response || []);
    };

    fetchCountries();
  }, []);

  const changeCountryCardState = (country: TCountry) => {
    const newCountries = countries.map((prevCountry) =>
      prevCountry.name.common === country.name.common
        ? { ...prevCountry, selected: !prevCountry.selected }
        : prevCountry
    );

    setCountries(newCountries);
  };

  return (
    <div className="flex flex-col mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mt-12">
        Favorite Countries
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {countries.map((country) => {
          if (country.selected)
            return (
              <li
                className="p-4 bg-white rounded-lg shadow-green-200 shadow-md transition-shadow duration-300 hover:shadow-green-300 hover:shadow-lg transform cursor-pointer"
                key={country.name.common}
                onClick={() => changeCountryCardState(country)}
              >
                <CountryCard country={country} />
              </li>
            );
        })}
      </ul>
      <br />
      <h1 className="text-3xl font-bold text-center mb-8">Countries</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {countries.map((country) => {
          if (!country.selected)
            return (
              <li
                className="p-4 bg-white rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg transform cursor-pointer"
                key={country.name.common}
                onClick={() => changeCountryCardState(country)}
              >
                <CountryCard country={country} />
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default CountryList;
