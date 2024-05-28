import { Route,Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import './App.css'

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
