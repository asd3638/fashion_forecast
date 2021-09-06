import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./global-styles";
import Nav from "./components/Nav";
import Home from "./routes/Home";
import Today from "./routes/Today";
import Shopping from "./routes/Shopping";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/today" component={Today} />
        <Route path="/shopping" component={Shopping} />
      </BrowserRouter>
    </>
  );
}

export default App;
