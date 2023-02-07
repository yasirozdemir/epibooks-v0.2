import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import books from "../data/books/scifi.json";

class AllTheBooks extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {books.map(({ asin, title, img, price, category }) => {
            return (
              <Col key={asin} xs={10} sm={6} md={4} lg={3} className="mb-3">
                <Card className="bookCard">
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-primary">${price}</Card.Text>
                    <small>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </small>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
