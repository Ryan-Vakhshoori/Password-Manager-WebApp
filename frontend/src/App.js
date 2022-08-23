import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <Link to="/new-account"> create new account</Link>
      <br />
      <Link to="/passwords"> view passwords</Link>
    </nav>
  );
}

export default App;
