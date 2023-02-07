import "./App.css";
import "./MyStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter.jsx";
import Welcome from "./components/Welcome.jsx";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome
        quoteOfTheDay="'One glance at a book and you hear the voice of another person, perhaps
        someone dead for 1,000 years. To read is to voyage through time.' - Carl
        Sagan"
      />
      {/* <AllTheBooks /> */}
      <BookList />
      <MyFooter />
    </div>
  );
}

export default App;
