import React from 'react';

const Filter = (props) => {

console.log("Filter:", props);

  return (
    <div className="filter">
      <label htmlFor="title-filter">Title: </label>
      <input onChange={props.handleFilterInput} id="title-filter" type="text" value={props.input} />
    </div>
  );
}

export default Filter;
