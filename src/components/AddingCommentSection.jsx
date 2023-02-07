import { useState } from "react";
import { FormGroup, Form, Button, Alert } from "react-bootstrap";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

const AddingCommentSection = (props) => {
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 0,
    elementId: props.bookID,
  });
  const [isError, setIsError] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const postComment = async () => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setIsUploaded(true);
        setNewComment({
          ...newComment,
          comment: "",
          rate: 0,
        });
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <h6 className="mt-2">Add comment</h6>
      {isError && (
        <Alert variant="danger">
          The comment couldn't saved. Please try again!
        </Alert>
      )}
      {isUploaded && <Alert variant="success">Thanks for the comment!</Alert>}
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          postComment();
        }}
      >
        <FormGroup>
          <Form.Control
            as="textarea"
            placeholder="Your comment..."
            value={newComment.comment}
            onChange={(event) => {
              setNewComment({
                ...newComment,
                comment: event.target.value,
              });
            }}
          />
        </FormGroup>
        <FormGroup className="d-flex align-items-center">
          <label htmlFor="rateInput">Rate:</label>
          <input
            className="ml-2 w-50"
            type="number"
            id="rateInput"
            required
            min={0}
            max={5}
            value={newComment.rate}
            onChange={(event) => {
              setNewComment({
                ...newComment,
                rate: event.target.value,
              });
            }}
          />
          <Button className="ml-auto" type="submit" variant="dark">
            Send
          </Button>
        </FormGroup>
      </Form>
    </>
  );
};

export default AddingCommentSection;
