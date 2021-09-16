import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./global-styles";
// import Nav from "./components/Nav";
import Home from "./routes/Home";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Nav /> */}
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;
