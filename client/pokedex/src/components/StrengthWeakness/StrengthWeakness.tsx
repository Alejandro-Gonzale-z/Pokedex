import "./StrengthWeakness.css";
import up from "./thumbsup.png";
import down from "./thumbsdown.png";

interface strengthweaknessProps {
  strength: string[];
  weakness: string[];
}

const StrengthWeakness: React.FC<strengthweaknessProps> = ({
  strength,
  weakness,
}) => {


  return (
    <div className="sw-container">
      <div className="half-container">
        <div className="half-container-heading">
        <h1 className="moveset-h1 green">Strong Against</h1>
        <img src={up} alt={"Thumbs Up"} className="thumbs"/>
        </div>
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
        <div className="half-container-heading">
        <h1 className="moveset-h1 red">Weak Against</h1>
        <img src={down} alt={"Thumbs Down"} className="thumbs" />
        </div>
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
