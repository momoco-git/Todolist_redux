import { Route, Switch } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail/Detail";
import Layout from "./components/layout/Layout";
import TodoList from "./components/pages/TodoList";
import NotFound from "./components/notfound/NotFound";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact>
          <Layout>
            <TodoList></TodoList>
          </Layout>
        </Route>
        <Route path={"/detail/:id"}>
          <Detail></Detail>
        </Route>
        <Route>
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
