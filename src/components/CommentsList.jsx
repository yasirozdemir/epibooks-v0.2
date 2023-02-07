import { Component } from "react";
import { ListGroup, Spinner, Alert } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  state = {
    comments: [],
    isError: false,
    isLoading: true,
    url: "https://striveschool-api.herokuapp.com/api/comments/",
  };

  fetchComments = async () => {
    try {
      const response = await fetch(this.state.url + this.props.bookAsin, {
        headers: {
          method: "GET",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
        },
      });
      if (response.ok) {
        const commentData = await response.json();

        this.setState({
          ...this.state,
          comments: commentData,
          isLoading: false,
        });
      } else {
        console.log("error");
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
      console.error(error.message);
      this.setState({
        ...this.state,
        isError: true,
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchComments();
  }

  render() {
    return (
      <>
        <h6>Comments List</h6>
        {this.state.isLoading && <Spinner animation="border" variant="dark" />}
        {this.state.isError && (
          <Alert variant="danger">Somethwing went wrong while loading!</Alert>
        )}

        <ListGroup>
          {this.state.comments.map((commentObj) => {
            return (
              <SingleComment key={commentObj._id} commentObj={commentObj} />
            );
          })}
        </ListGroup>
      </>
    );
  }
}

export default CommentsList;
