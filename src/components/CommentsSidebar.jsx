import { Component } from "react";
import { Alert, Spinner, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddingCommentSection from "./AddingCommentSection";

class CommentsSidebar extends Component {
  state = {
    comments: [],
    isError: false,
    isLoading: true,
    url: "https://striveschool-api.herokuapp.com/api/comments/",
  };

  fetchComments = async () => {
    try {
      const response = await fetch(this.state.url + this.props.bookID, {
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
        this.setState({
          ...this.state,
          isError: true,
          isLoading: false,
        });
      }
    } catch (error) {
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

  componentDidUpdate = (prevProps) => {
    if (prevProps.bookID !== this.props.bookID) {
      this.fetchComments();
    }
  };

  render() {
    return (
      <div id="commentsSidebar" className="col-3 p-3 mb-4">
        <h6>Comments Section</h6>
        {this.state.isLoading && <Spinner animation="border" variant="dark" />}
        {this.state.isError && (
          <Alert variant="danger">
            Somethwing went wrong while loading comments!
          </Alert>
        )}

        {this.props.bookID && (
          <>
            <ListGroup>
              {this.state.comments.map((commentObj) => {
                return (
                  <SingleComment key={commentObj._id} commentObj={commentObj} />
                );
              })}
              {this.state.comments === [] && (
                <ListGroup.Item>
                  There is no comment for this book.
                </ListGroup.Item>
              )}
            </ListGroup>
            <AddingCommentSection bookID={this.props.bookID} />
          </>
        )}
        {!this.props.bookID && (
          <>
            <Alert className="m-0" variant="warning">
              Select a book to see comments!
            </Alert>
          </>
        )}
      </div>
    );
  }
}

export default CommentsSidebar;
