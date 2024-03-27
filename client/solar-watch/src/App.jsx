
import './App.css'
import {Link} from "react-router-dom";

function App() {

  return (
    <div>
        <Link to={"/logIn"}>
      <button>Log In</button>
            </Link>
        <Link to={"/register"}>
      <button>Sing Up</button>
        </Link>
    </div>
  )
}

export default App
