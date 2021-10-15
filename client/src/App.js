import { BrowserRouter, Route } from "react-router-dom";
import GlobalStyle from "./global-styles";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Signin from "./routes/Signin";
import Mypage from "./routes/Mypage";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/mypage" component={Mypage} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={Signin} />
      </BrowserRouter>
    </>
  );
}

export default App;
