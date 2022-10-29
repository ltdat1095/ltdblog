import React from 'react';
import Post from './Post'
import { blogs_backend } from '../../../../declarations/blogs_backend';

class MainPage extends React.Component {
  async componentDidMount() { 
    console.log(await blogs_backend.getBlogs());
  }

  renderDivs() {
    const blogs = [];
    blogs.push(
      <Post title='TestA' content='ABCDEF' />
    )
    blogs.push(
      <Post title='TestA' content='ABCDEF' />
    )
    blogs.push(
      <Post title='TestA' content='ABCDEF' />
    )
    blogs.push(
      <Post title='TestA' content='ABCDEF' />
    )
    blogs.push(
      <Post title='TestA' content='ABCDEF' />
    )

    return blogs;
  }

  render() {
    return (
      <div className="container-fluid mt-3">
        <div id="blog-container" className="row">
          {this.renderDivs()}
        </div>
      </div>
    )
  }
};

export default MainPage;