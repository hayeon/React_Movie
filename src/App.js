//라우터 렌더링
import {BrowserRouter as Router,
        Switch, Route,} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return ( 
  //   <Router>
  //     <Switch>

  //     <Route path="/"> {/* 홈으로 이동하는 라우터! 사용자가 /에 있으면, 홈을 렌더링 할 거임 */}
  //     <Home></Home>
  //     </Route>

  //     <Route path="/Detail">
  //     <Detail></Detail>
  //     </Route>

  //     </Switch>
  // </Router>

  <Router>
  
  <Switch>
    <Route path="/movie">
      <h1>배고파요</h1>
    </Route>

    <Route path="/">
      <Home />
    </Route>
  </Switch>

</Router>
  );
};

export default App;
