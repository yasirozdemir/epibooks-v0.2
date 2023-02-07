import { Component } from "react";
import { Card, Col } from "react-bootstrap";
import CommentsArea from "./CommentsArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={10} sm={6} md={4} lg={3} className="mb-3">
        <Card
          onClick={() => {
            if (this.state.selected) {
              this.setState({
                selected: false,
              });
            } else {
              this.setState({
                selected: true,
              });
            }
          }}
          className={this.state.selected ? "selected bookCard" : "bookCard"}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
            <Card.Text>
              <span className="text-primary">${this.props.book.price}</span>
              <span className="d-none d-md-inline">
                {" | "}
                {this.props.book.category.charAt(0).toUpperCase() +
                  this.props.book.category.slice(1)}
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
        {this.state.selected && (
          <CommentsArea bookAsin={this.props.book.asin} />
        )}
      </Col>
    );
  }
}

export default SingleBook;
