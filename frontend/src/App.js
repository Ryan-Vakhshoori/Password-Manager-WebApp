import { Link } from "react-router-dom";
import axios from "axios";

// axios.get("http://localhost:3001").then(function (response) {
//   console.log("successfully added user");
// }).catch(function (error) {
//   console.log(error);
// });

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
