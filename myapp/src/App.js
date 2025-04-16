import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./Main"; 
import Users from "./Users";
import Update from "./Update";

function App() {
  return (
    <BrowserRouter> 

      <Routes>
        <Route path="/" element={<Main />} /> 
        <Route path="/users" element={<Users />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

