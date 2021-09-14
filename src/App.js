import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./global-styles";
// import Nav from "./components/Nav";
import Home from "./routes/Home";
import Capture from "./routes/Capture";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        {/* <Nav /> */}
        <Route exact path="/" component={Home} />
        <Route path="/capture" component={Capture} />
      </BrowserRouter>
    </>
  );
}

export default App;
