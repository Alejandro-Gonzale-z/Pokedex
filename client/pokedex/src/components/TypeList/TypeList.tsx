import React from "react";
import "./TypeList.css";

interface TypeListProps {
  List: string[];
  filteredList: string[];
  setFilteredList: React.Dispatch<React.SetStateAction<string[]>>;
}

const TypeList: React.FC<TypeListProps> = ({
  List,
  filteredList,
  setFilteredList,
}) => {
  const handleClick = (type: string) => {
    console.log(type);
    setFilteredList([type]);
    console.log(filteredList);
  };

  return (
    <div className="container">
      {List.map((type) => (
        <button
          key={List.indexOf(type)}
          onClick={() => handleClick(type)}
          className={`button ${type.toLowerCase()}`}
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TypeList;
