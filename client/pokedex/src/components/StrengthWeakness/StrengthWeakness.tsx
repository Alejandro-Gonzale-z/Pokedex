import "./StrengthWeakness.css";

interface strengthweaknessProps {
  strength: string[];
  weakness: string[];
}

const StrengthWeakness: React.FC<strengthweaknessProps> = ({
  strength,
  weakness,
}) => {
  const thumbs = ["", ""];

  return (
    <div className="sw-container">
      <div className="half-container">
        <h1 className="moveset-h1 green">Strong Against</h1>
        <div className="buttons-containers">
          {strength.map((strength) => (
            <button
              key={strength}
              className={`sw-button ${strength.toLowerCase()}`}
            >
              {strength}
            </button>
          ))}
        </div>
      </div>
      <div className="half-container">
        <h1 className="moveset-h1 red">Weak Against</h1>
        <div className="buttons-containers">
          {weakness.map((weakness) => (
            <button
              key={weakness}
              className={`sw-button ${weakness.toLowerCase()}`}
            >
              {weakness}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthWeakness;
