import { NavLink } from "react-router-dom";
import Buttom from "../components/Button";

export default function MainHeader() {
  function handleUpcomingSession() {

  }

  return (
    <header id="main-header">
      <h1>React Mentoring</h1>
      <nav>
        <ul>
          <li><NavLink to="/">Our Mission</NavLink></li>
          <li><NavLink to="/sessions">Browse Sessions</NavLink></li>
          <li><Buttom onClick={handleUpcomingSession}>Upcoming session</Buttom></li>
        </ul>
      </nav>
    </header>
  )
}