import React, { Component } from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
    }
  }
  handleClick=()=> {
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite,
    }))
  }
  render() {
    const {item}=this.props;
    const favselected = (this.state.isFavourite) ? "fa fa-star" : "fa fa-star-o"
    return (
      <div className="box">
        <div className="star">
          <i className={favselected} onClick={this.handleClick}></i>
        </div>
        <div className="img-box">
          <img src={item.image_url} />
        </div>
        <div className="item-desc">
          <h4>{item.name}</h4>
          <p>{item.description}</p>
        </div>
      </div>
    );
  }
}
export default Home;