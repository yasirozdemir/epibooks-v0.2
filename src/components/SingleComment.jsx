import { useState } from "react";
import { ListGroup, Button, Alert } from "react-bootstrap";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

const SingleComment = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [commentID, setCommentID] = useState(props.commentObj._id);

  const deleteComment = async () => {
    try {
      const response = await fetch(url + commentID, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        setIsDeleted(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      {isError && <Alert variant="danger">Comment couldn't deleted!</Alert>}
      {isDeleted && (
        <Alert variant="success">Comment succesfully deleted!</Alert>
      )}
      <ListGroup.Item className="mb-1">
        <div className="mb-1 d-flex align-items-center">
          ({props.commentObj.rate}) {props.commentObj.comment}
          <Button className="ml-auto" variant="danger" onClick={deleteComment}>
            X
          </Button>
        </div>
      </ListGroup.Item>
    </>
  );
};

export default SingleComment;
