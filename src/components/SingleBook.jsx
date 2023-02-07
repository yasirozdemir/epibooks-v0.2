import { Card, Col } from "react-bootstrap";
import { useState } from "react";

const SingleBook = (props) => {
  const [selected, setSelected] = useState(false);

  return (
    <Col xs={10} sm={6} md={4} lg={3} className="mb-3">
      <Card
        onClick={() => {
          props.setBookID(props.book.asin);
          if (selected) {
            setSelected(false);
            props.setBookID(undefined);
          } else {
            setSelected(true);
          }
        }}
        className={selected ? "selected bookCard" : "bookCard"}
      >
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title>{props.book.title}</Card.Title>
          <Card.Text>
            <span className="text-primary">${props.book.price}</span>
            <span className="d-none d-md-inline">
              {" | "}
              {props.book.category.charAt(0).toUpperCase() +
                props.book.category.slice(1)}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
