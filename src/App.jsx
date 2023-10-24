import { BrowserRouter, Routes, Route } from "react-dom/client";
import {Home} from "./routes/Home.jsx";



const App = () => {
  return (
    <BrowserRouter basename="/app">
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
