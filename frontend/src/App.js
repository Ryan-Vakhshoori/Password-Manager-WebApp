import { Link } from "react-router-dom";

function App() {
  return (
    <nav>
      <Link to="/new-user"> create new user</Link>
      <br />
      <Link to="/login"> login </Link>
    </nav>
  );
}

export default App;
