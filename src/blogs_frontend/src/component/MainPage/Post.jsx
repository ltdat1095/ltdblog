import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="col-4 post">
        <div className="card h-100">
          <img src="../../../assets/logo/logo.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.content}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
};

export default Post;