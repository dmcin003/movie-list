import React from 'react';


var AddMovies = (props) =>{


  return (<div><form onSubmit={props.submit}>
    <input type="text" placeholder="Add Movie title here" onChange={props.change}/>
    <input type="submit" value="Add"/>
    </form></div>);




}

export default AddMovies;