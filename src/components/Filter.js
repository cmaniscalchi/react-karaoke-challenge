import React, { Component } from 'react';

const Filter = props => {
  // console.log("Filter:", props)
  return (
    <div className="filter">
      <label htmlFor="title-filter">Title: </label>
      <input onChange={props.handleChange} id="title-filter" type="text" value={props.input} />
    </div>
  );
}

export default Filter;
