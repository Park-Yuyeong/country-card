import CountryCardProps from "./CountryCardProps.interface";

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <div>
      <img
        src={country.flags.png}
        alt="이미지 오류"
        className="w-20 aspect-video mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{country.name.common}</h3>
      <p className="text-gray-600">{country.capital}</p>
    </div>
  );
};

export default CountryCard;
