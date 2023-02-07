import { Component } from "react";
import { Row, InputGroup, Form, Button, Col, Alert } from "react-bootstrap";
import SingleBook from "./SingleBook";
import History from "../data/books/history.json";
import Horror from "../data/books/horror.json";
import Fantasy from "../data/books/fantasy.json";
import Romance from "../data/books/romance.json";
import Scifi from "../data/books/scifi.json";

class BookList extends Component {
  state = {
    booksArray: "",
    searchQuery: "",
  };

  render() {
    return (
      <div className="col-8">
        <InputGroup className="col-12 col-lg-6 mx-auto mb-4">
          <Form.Control
            placeholder="Search Books..."
            onChange={(event) => {
              this.setState({
                ...this.state,
                searchQuery: event.target.value,
              });
            }}
          />
        </InputGroup>

        <Row className="px-3">
          <Col className="mx-auto mb-4">
            <Row className="justify-content-between align-items-center flex-column flex-md-row">
              <Button
                className="genreBtn col-6 col-md-2 mb-2 mb-md-0"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    booksArray: History,
                  });
                }}
              >
                History
              </Button>
              <Button
                className="genreBtn col-6 col-md-2 mb-2 mb-md-0"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    booksArray: Horror,
                  });
                }}
              >
                Horror
              </Button>
              <Button
                className="genreBtn col-6 col-md-2 mb-2 mb-md-0"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    booksArray: Fantasy,
                  });
                }}
              >
                Fantasy
              </Button>
              <Button
                className="genreBtn col-6 col-md-2 mb-2 mb-md-0"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    booksArray: Romance,
                  });
                }}
              >
                Romance
              </Button>
              <Button
                className="genreBtn col-6 col-md-2 mb-2 mb-md-0"
                variant="secondary"
                onClick={() => {
                  this.setState({
                    ...this.state,
                    booksArray: Scifi,
                  });
                }}
              >
                Scifi
              </Button>
            </Row>
            <Row>
              {this.state.booksArray === "" && (
                <Alert variant="light" className="text-dark mt-3 mx-auto w-75">
                  Welcome to EpiBooks, please select a genre to see the books 🙂
                </Alert>
              )}
            </Row>
          </Col>
        </Row>

        {this.state.booksArray !== "" && (
          <Row className="justify-content-center">
            {this.state.booksArray.map((book) => {
              return (
                book.title.toLowerCase().includes(this.state.searchQuery) && (
                  <SingleBook key={book.asin} book={book} />
                )
              );
            })}
          </Row>
        )}
      </div>
    );
  }
}

export default BookList;
