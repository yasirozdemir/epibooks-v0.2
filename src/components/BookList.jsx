import { Component } from "react";
import {
  Container,
  Row,
  InputGroup,
  Form,
  Button,
  Col,
  Alert,
} from "react-bootstrap";
import SingleBook from "./SingleBook";
import HistoryBooks from "../data/books/history.json";
import HorrorBooks from "../data/books/horror.json";
import FantasyBooks from "../data/books/fantasy.json";
import RomanceBooks from "../data/books/romance.json";
import ScifiBooks from "../data/books/scifi.json";

class BookList extends Component {
  state = {
    booksArray: "",
    searchQuery: "",
  };

  render() {
    return (
      <Container>
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

        <Col className="mx-auto  mb-4">
          <Row className="justify-content-between align-items-center flex-column flex-sm-row">
            <Button
              className="genreBtn col-6 col-sm-2 mb-2 mb-sm-0"
              variant="secondary"
              onClick={() => {
                this.setState({
                  ...this.state,
                  booksArray: HistoryBooks,
                });
              }}
            >
              History <span className="d-none d-xl-inline">Books</span>
            </Button>
            <Button
              className="genreBtn col-6 col-sm-2 mb-2 mb-sm-0"
              variant="secondary"
              onClick={() => {
                this.setState({
                  ...this.state,
                  booksArray: HorrorBooks,
                });
              }}
            >
              Horror <span className="d-none d-xl-inline">Books</span>
            </Button>
            <Button
              className="genreBtn col-6 col-sm-2 mb-2 mb-sm-0"
              variant="secondary"
              onClick={() => {
                this.setState({
                  ...this.state,
                  booksArray: FantasyBooks,
                });
              }}
            >
              Fantasy <span className="d-none d-xl-inline">Books</span>
            </Button>
            <Button
              className="genreBtn col-6 col-sm-2 mb-2 mb-sm-0"
              variant="secondary"
              onClick={() => {
                this.setState({
                  ...this.state,
                  booksArray: RomanceBooks,
                });
              }}
            >
              Romance <span className="d-none d-xl-inline">Books</span>
            </Button>
            <Button
              className="genreBtn col-6 col-sm-2 mb-2 mb-sm-0"
              variant="secondary"
              onClick={() => {
                this.setState({
                  ...this.state,
                  booksArray: ScifiBooks,
                });
              }}
            >
              Scifi <span className="d-none d-xl-inline">Books</span>
            </Button>
          </Row>
        </Col>

        {this.state.booksArray === "" && (
          <Alert variant="light" className="text-dark">
            Welcome to EpiBooks, please select a genre to see the books 🙂
          </Alert>
        )}

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
      </Container>
    );
  }
}

export default BookList;
