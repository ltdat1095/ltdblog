import List "mo:base/List";
import Debug "mo:base/Debug";

actor LtdBlog {
  public type Blog = {
    title: Text;
    content: Text;
  };

  var blogs: List.List<Blog> = List.nil<Blog>();

  public func createBlog(titleText: Text, contentText: Text) {
    let newBlog : Blog = {
      title = titleText;
      content = contentText;
    };

    blogs := List.push(newBlog, blogs);
    Debug.print(debug_show(blogs));
  };

  public query func getBlogs(): async List.List<Blog> {
    return blogs;
  }
}
