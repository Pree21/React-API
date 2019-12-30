import React, { Component } from 'react';
import Modal from 'react-responsive-modal';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavourite: false,
      open: false,
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      isFavourite: !prevState.isFavourite,
    }))
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { item } = this.props;
    const favselected = (this.state.isFavourite) ? "fa fa-star" : "fa fa-star-o"
    return (
      <div className="box">
        <div className="box-in" onClick={this.onOpenModal}>
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


        <Modal open={this.state.open} onClose={this.onCloseModal} center>
          <div className="box-in modal-content">
            <div className="img-box">
              <img src={item.image_url} />
            </div>
            <div className="item-desc">
              <h2>{item.name}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        </Modal>

      </div>
    );
  }
}
export default Home;
