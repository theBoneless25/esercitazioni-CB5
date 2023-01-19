import { useState } from "react";
import "./index.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
    setFilterState(inputFilter);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div className="container_filter">
      <form className="Filter" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Cerca.."
          className="input_text"
        />
        <input type="submit" value="🔎" className="input_button" />
      </form>
    </div>
  );
};

export default Filter;
