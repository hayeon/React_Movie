import Home from "./routes/Home";
import {BrowserRouter as Router,
        Switch, Route,} from "react-router-dom";

function App() {


  return (
<Router>
  <Switch>
    <Route path="/"> {/* 홈으로 이동하는 라우터! 사용자가 /에 있으면 홈을 렌더링 할 거임 */}
    <Home></Home>
    </Route>
  </Switch>
</Router>
  );
};

//proTypes 설정



export default App;
