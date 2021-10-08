import React from 'react';

var Search = (props) =>{


  return (<div className="searchBar">
    <form onSubmit={props.submit}>
    <input type="text" placeholder="Search" onChange={props.change}/>
    <input type="submit" value="Go!"/>
  </form>

    </div>
  );

};

export default Search;