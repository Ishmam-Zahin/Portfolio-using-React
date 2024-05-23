import "./NavBar.css";
export default function NavBar({ onPress, currentActiveTab }) {
  return (
    <div className="nav-container">
      <Logo />
      <Intro />
      <Links>
        <Link id={1} onPress={onPress} currentActiveTab={currentActiveTab}>
          Home
        </Link>
        <Link id={2} onPress={onPress} currentActiveTab={currentActiveTab}>
          About Me
        </Link>
        <Link id={3} onPress={onPress} currentActiveTab={currentActiveTab}>
          Services
        </Link>
        <Link id={4} onPress={onPress} currentActiveTab={currentActiveTab}>
          Skills
        </Link>
        <Link id={5} onPress={onPress} currentActiveTab={currentActiveTab}>
          Education
        </Link>
        <Link id={6} onPress={onPress} currentActiveTab={currentActiveTab}>
          Experience
        </Link>
        <Link id={7} onPress={onPress} currentActiveTab={currentActiveTab}>
          Projects
        </Link>
        <Link id={8} onPress={onPress} currentActiveTab={currentActiveTab}>
          Contact
        </Link>
      </Links>
      <Footer>
        2024 copyright reservered.
        <br />
        According to Bangladesh ICT rule
      </Footer>
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

function Links({ children }) {
  return <ul className="links-container">{children}</ul>;
}

function Link({ id, onPress, children, currentActiveTab }) {
  return (
    <li>
      <button
        className={`${id === currentActiveTab ? "activated" : ""}`}
        onClick={(e) => onPress(id)}
      >
        {children}
      </button>
    </li>
  );
}

function Footer({ children }) {
  return <footer className="foot-container">{children}</footer>;
}
