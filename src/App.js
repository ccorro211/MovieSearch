import { Route,Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import './App.css'
import TheHeader from "./components/TheHeader";
function App() {
  return (
    <>
      <div className="App">
        <TheHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App;
