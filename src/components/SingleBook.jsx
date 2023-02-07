import { Component } from "react";
import { Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <Col xs={10} sm={6} md={4} lg={3} className="mb-3">
        <Card
          onClick={() => {
            this.props.setBookID(this.props.book.asin);
            if (this.state.selected) {
              this.setState({
                selected: false,
              });
              this.props.setBookID(undefined);
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
      </Col>
    );
  }
}

export default SingleBook;
