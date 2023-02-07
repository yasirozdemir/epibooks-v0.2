import { Component } from "react";
import { ListGroup, Button, Alert } from "react-bootstrap";

class SingleComment extends Component {
  state = {
    isDeleted: false,
    isError: false,
    url: "https://striveschool-api.herokuapp.com/api/comments/",
    commentId: this.props.commentObj._id,
  };

  deleteComment = async () => {
    try {
      const response = await fetch(this.state.url + this.state.commentId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        this.setState({
          ...this.state,
          isDeleted: true,
        });
      } else {
        this.setState({
          ...this.state,
          isError: true,
        });
      }
    } catch (error) {
      this.setState({
        ...this.state,
        isError: true,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.isError && (
          <Alert variant="danger">Comment couldn't deleted!</Alert>
        )}
        {this.state.isDeleted && (
          <Alert variant="success">Comment succesfully deleted!</Alert>
        )}
        <ListGroup.Item className="mb-1">
          <div className="mb-1 d-flex align-items-center">
            ({this.props.commentObj.rate}) {this.props.commentObj.comment}
            <Button
              className="ml-auto"
              variant="danger"
              onClick={this.deleteComment}
            >
              X
            </Button>
          </div>
        </ListGroup.Item>
      </>
    );
  }
}

export default SingleComment;
