import { useState } from "react";
import "./index.css";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
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
          placeholder="Cerca post.."
        />
        <input type="submit" value="🔎" className="input_filter" />
      </form>
    </div>
  );
};

export default Filter;
