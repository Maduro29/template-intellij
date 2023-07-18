import Header from "./components/Header"
import Sticky from "./components/Sticky";
import Container from "./components/Container";
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <Sticky />
      <Container />
    </div>
  );
}

export default App;

/* Header ok
      Sticky header ok
      Container
        Introduction ok
        Content1 ok
        Subcontent1
        Content2
        Contact
      Footer */