import { Component } from "react";
import { FormGroup, Form, Button, Alert } from "react-bootstrap";

class AddingCommentSection extends Component {
  state = {
    url: "https://striveschool-api.herokuapp.com/api/comments/",
    newComment: {
      comment: "",
      rate: 0,
      elementId: this.props.bookAsin,
    },
    isError: false,
    isUploaded: false,
  };

  postComment = async () => {
    try {
      console.log(this.props.bookAsin);
      const response = await fetch(this.state.url, {
        method: "POST",
        body: JSON.stringify(this.state.newComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      if (response.ok) {
        this.setState({
          ...this.state,
          isUploaded: true,
          newComment: {
            ...this.state.newComment,
            comment: "",
            rate: 0,
          },
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
        <h6>Add comment</h6>
        {this.state.isError && (
          <Alert variant="danger">
            The comment couldn't saved. Please try again!
          </Alert>
        )}
        {this.state.isUploaded && (
          <Alert variant="success">Thanks for the comment!</Alert>
        )}
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            this.postComment();
          }}
        >
          <FormGroup>
            <Form.Control
              as="textarea"
              placeholder="Your comment..."
              value={this.state.newComment.comment}
              onChange={(event) => {
                this.setState({
                  ...this.state,
                  newComment: {
                    ...this.state.newComment,
                    comment: event.target.value,
                  },
                });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="rateInput">Rate</label>
            <input
              className="ml-2 w-50"
              type="number"
              id="rateInput"
              required
              min={0}
              max={5}
              value={this.state.newComment.rate}
              onChange={(event) => {
                this.setState({
                  ...this.state,
                  newComment: {
                    ...this.state.newComment,
                    rate: event.target.value,
                  },
                });
              }}
            />
          </FormGroup>
          <Button type="submit" variant="dark">
            Send
          </Button>
        </Form>
      </>
    );
  }
}

export default AddingCommentSection;
