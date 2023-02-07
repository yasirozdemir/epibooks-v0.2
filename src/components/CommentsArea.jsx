import { Component } from "react";
import AddingCommentSection from "./AddingCommentSection";
import CommentsList from "./CommentsList";

class CommentsArea extends Component {
  render() {
    return (
      <div className="commentsArea">
        <CommentsList bookAsin={this.props.bookAsin} />
        <AddingCommentSection bookAsin={this.props.bookAsin} />
      </div>
    );
  }
}

export default CommentsArea;
