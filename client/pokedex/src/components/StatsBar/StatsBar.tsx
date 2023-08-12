import "./StatsBar.css";

interface statsbarProps {
  heading: string;
  value: number;
}

const StatsBar: React.FC<statsbarProps> = ({ heading, value }) => {
    const widthValue = (value / 2);

    return (
    <div className="stats-bar">
      <h1 className="stats-bar-heading">{heading}</h1>
        <div className="bar-container">
        <div className="blue-bar" style={{width: `${widthValue}%`}}>{value}</div>
        </div>
    </div>
  );
};

export default StatsBar;
