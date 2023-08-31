import "./resume.css";

let Resume = ({ name, mail, number, linkedin, github, data }) => {
  return (
    <div className="conatainer">
      <div className="name">
        <h1>{name}</h1>
      </div>
      <div className="contact">
        <div className="mail">{mail}</div>
        <div className="number">{number}</div>
      </div>

      <div className="socials">
        <div className="socials-link">
          <span>
            <img src="src\assets\linkedin.png" alt="linked-in" />
          </span>
          <a href={linkedin}>{linkedin}</a>
        </div>
        <div className="socials-link">
          <span>
            <img src="src\assets\github.png" alt="github" />
          </span>
          <a href={github}>{github}</a>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default Resume;
