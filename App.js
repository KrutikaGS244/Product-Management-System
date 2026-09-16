import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import About from "./About";

function App() {

  return (

    <BrowserRouter>

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px"
        }}
      >

        <Link to="/">
          <button>Home</button>
        </Link>

        <Link to="/about">
          <button>About</button>
        </Link>

      </div>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;