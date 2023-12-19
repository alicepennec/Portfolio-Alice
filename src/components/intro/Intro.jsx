import "./intro.scss";

export default function Intro() {

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/woman.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h3>Hi, my name is</h3>
          <h1>Alice Pennec</h1>
          <h3>I'm a <span>full-stack web developer</span></h3>
          <h4>After 9 years in the luxury hospitality I decided to embrace my passion for technology. Ready to create beautiful and robust website to showcase your talent. <a href="#contact"><span>Let's get in touch!</span></a></h4>
        </div>
        <a href="#expertise" className="icon">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
