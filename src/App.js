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
        <Route exact path="/home" component={Home} />
        <Route exact path="/mypage" component={Mypage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signin" component={Signin} />
      </BrowserRouter>
    </>
  );
}

export default App;
