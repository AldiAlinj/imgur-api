import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './views/Home/Home';
import SinglePost from "./views/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post/:id' element={<SinglePost />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
