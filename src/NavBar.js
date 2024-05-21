import "./NavBar.css";
export default function NavBar() {
  return (
    <div className="nav-container">
      <Logo />
      <Intro />
    </div>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <img src="./profile.jpg" alt="owner" />
    </div>
  );
}

function Intro() {
  return (
    <div className="intro-container">
      <p className="first-p">
        <em>Md.</em> Ishmam Zahin
      </p>
      <p className="second-p">Full stack web devloper in Bangladesh</p>
    </div>
  );
}
