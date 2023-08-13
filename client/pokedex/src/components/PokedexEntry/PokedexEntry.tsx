import "./PokedexEntry.css";

interface PokedexEntryProps {
  description: string;
  elementalType: string;
}

const PokedexEntry: React.FC<PokedexEntryProps> = ({
  description,
  elementalType,
}) => {
  return (
    <div className="entry-container">
      <h1 className={`entry-heading ${elementalType.toLowerCase()}-font`}>
        Pokedex Entry
      </h1>
      <p>{description}</p>
    </div>
  );
};

export default PokedexEntry;
