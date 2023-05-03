import React from "react";

const Filter = ({ value, onChange }) => (
  <label htmlFor="">
    Фильтр по названию <input type="text" value={value} onChange={onChange} />
  </label>
);

export default Filter;
