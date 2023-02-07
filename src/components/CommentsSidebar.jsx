import { Alert, ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import AddingCommentSection from "./AddingCommentSection";
import { useEffect, useState } from "react";
const url = "https://striveschool-api.herokuapp.com/api/comments/";

const CommentsSidebar = (props) => {
  const [comments, setComments] = useState([]);
  const [isError, setIsError] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);

  const fetchComments = async () => {
    try {
      if (props.bookID) {
        const response = await fetch(url + props.bookID, {
          headers: {
            method: "GET",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2M5MzgxYWU3MzczODAwMTUzNzQzN2MiLCJpYXQiOjE2NzUzNDI4NzAsImV4cCI6MTY3NjU1MjQ3MH0.XvSJCouk9YeDJk4keaXoIOlB-nkCaRWTmZAqhXXgSGQ",
          },
        });
        if (response.ok) {
          const commentData = await response.json();
          setComments(commentData);
          // setIsLoading(false);
        } else {
          setIsError(true);
          // setIsLoading(false);
        }
      }
    } catch (error) {
      setIsError(true);
      // setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.bookID]);

  return (
    <div id="commentsSidebar" className="col-3 p-3 mb-4">
      <h6>Comments Section</h6>
      {/* {isLoading && <Spinner animation="border" variant="dark" />} */}
      {isError && (
        <Alert variant="danger">
          Somethwing went wrong while loading comments!
        </Alert>
      )}

      {props.bookID && (
        <>
          <ListGroup>
            {comments.map((commentObj) => {
              return (
                <SingleComment key={commentObj._id} commentObj={commentObj} />
              );
            })}
            {comments.length < 1 && (
              <ListGroup.Item>
                There is no comment for this book.
              </ListGroup.Item>
            )}
          </ListGroup>
          <AddingCommentSection bookID={props.bookID} />
        </>
      )}
      {!props.bookID && !isError && (
        <>
          <Alert className="m-0" variant="warning">
            Select a book to see comments!
          </Alert>
        </>
      )}
    </div>
  );
};

export default CommentsSidebar;
