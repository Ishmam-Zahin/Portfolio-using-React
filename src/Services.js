import "./Services.css";

export default function Services() {
  return (
    <div className="services-container">
      <p>WHAT I DO?</p>
      <h2>
        HERE ARE SOME OF MY
        <br />
        EXPERTISE
      </h2>
      <Expertises />
    </div>
  );
}

function Expertises() {
  return (
    <div className="expertises-container">
      <Expertise />
      <Expertise />
      <Expertise />
      <Expertise />
      <Expertise />
      <Expertise />
    </div>
  );
}

function Expertise() {
  return (
    <div className="expertise-container">
      <p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="60px"
          viewBox="0 -960 960 960"
          width="64px"
          fill="#EA3323"
        >
          <path d="M480-200q66 0 113-47t47-113v-160q0-66-47-113t-113-47q-66 0-113 47t-47 113v160q0 66 47 113t113 47Zm-80-120h160v-80H400v80Zm0-160h160v-80H400v80Zm80 40Zm0 320q-65 0-120.5-32T272-240H160v-80h84q-3-20-3.5-40t-.5-40h-80v-80h80q0-20 .5-40t3.5-40h-84v-80h112q14-23 31.5-43t40.5-35l-64-66 56-56 86 86q28-9 57-9t57 9l88-86 56 56-66 66q23 15 41.5 34.5T688-640h112v80h-84q3 20 3.5 40t.5 40h80v80h-80q0 20-.5 40t-3.5 40h84v80H688q-32 56-87.5 88T480-120Z" />
        </svg>
      </p>
      <div className="info-container">
        <h3>PROBLEM SOLVER</h3>
        <p>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics
        </p>
      </div>
    </div>
  );
}
