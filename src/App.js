import { Route, Routes } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail/Detail";
import Layout from "./components/layout/Layout";
import TodoList from "./components/pages/TodoList";
import NotFound from "./components/notfound/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={
          <Layout>
            <TodoList></TodoList>
          </Layout>
        }/>
        <Route path={"/detail/:id"} element={<Detail/>}/>
        <Route element ={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
