import React from "react";
import "./TypeList.css";
import { Link } from "react-router-dom";

interface TypeListProps {
  List: string[];
  filteredList: string[];
  setFilteredList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TypeList: React.FC<TypeListProps> = ({
  List,
  setFilteredList,
}) => {
  const handleClick = (type: string) => {
    setFilteredList([type]);
  };

  return (
    <div className="container" key="">
      {List.map((type) => (
        <Link to={`/type/${type}`}>
          <button
            key={List.indexOf(type)}
            onClick={() => handleClick(type)}
            className={`button ${type.toLowerCase()}`}
          >
            {type}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default TypeList;
