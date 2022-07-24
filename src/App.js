import "./App.css";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<a href="/a">open A</a>}></Route>
        <Route path="/a" element={<ComponentA />} />
        <Route path="/b" element={<ComponentB />} />
      </Routes>
    </div>
  );
}

export default App;
