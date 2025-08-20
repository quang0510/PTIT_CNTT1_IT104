import React, { Component } from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

type PropTypes = {
  listPost: Post[];
};

export default class DetailPost extends Component<PropTypes> {
  constructor(props: PropTypes) {
    super(props);
  }
  render() {
    return (
      <>
        <h2 >Danh sách bài viết: </h2>
        {this.props.listPost.map((post: Post) => (
          <div >
            <div>Id: {post.id}</div>
            <div>Title: {post.title}</div>
            <div>Content: {post.content}</div>
            <div>Author: {post.author}</div>
          </div>
        ))}
      </>
    );
  }
}