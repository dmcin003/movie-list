import React from 'react';




class MovieListEntry extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn:false,style:{background:''}}
  }

  handleMovieButtonClick(event){
    console.log('clicking');
    var toggle = this.state.isToggleOn;
    this.setState({isToggleOn:!toggle});
    var style = {background: this.state.isToggleOn ? 'green' : ''};

    this.setState({style:style});
    console.log(this.state.style);
  }


  render(){
    return(<div className="movieTitle">{this.props.movie.title}
    <button style={this.state.style}onClick={this.handleMovieButtonClick.bind(this)}>Watched</button>
    </div>);

  }

}

export default MovieListEntry;