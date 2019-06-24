import React from 'react';


const SearchArea = (props) => {
    return (
        <div className="container">
        <form className="col s12" onSubmit={props.handleSubmit}>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate" onChange={props.handleChange} />
          <label htmlFor="last_name">Search</label>
        </div>
        </form>
      </div>
        
    )
}
export default SearchArea;