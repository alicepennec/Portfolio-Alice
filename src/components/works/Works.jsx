import { useState } from "react";
import "./works.scss"

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      title: "Lord of the coders",
      subtitle: "Ironhack Hackaton Project",
      desc: "Lord of the coders is a web application dedicated to coders. They ask the community for some help regarding a piece of code whatever the language used.",
      languages: "React.js - Node.js - Express.js - MongoDB - Cloudinary",
      img: "assets/LordOfTheCoders.PNG",
      demo: "https://lord-of-the-coders.netlify.app/",
      code: "https://github.com/marinamun/frontend-project-coders",
    },
    {
      id: "2",
      title: "IronNanny",
      subtitle: "Ironhack Hackaton Project",
      desc: "IronNanny is an application dedicated to families looking for the best nanny to take care of their children.",
      languages: "React.js - Node.js - APIs Rest - Bootstrap",
      img: "assets/IronNanny.PNG",
      demo: "https://ironnanny.netlify.app/",
      code: "https://github.com/Rin-o/M2-Project-Frontend"
    },
    {
      id: "3",
      title: "King of the beach",
      subtitle: "Ironhack Hackton Project",
      desc: "King of the beach is an online volleyball game. First project during the bootcamp made individually.",
      languages: "JavaScript, HTML, CSS",
      img: "assets/KingOfTheBeach.PNG",
      demo: "https://alicepennec.github.io/Repo1/",
      code: "https://github.com/alicepennec/Repo1",
    },
  ];

  const handleClick = (way) => {
    way === "left" ? 
    setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="top">
        <h1>My projects</h1>
      </div>
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h3>{d.subtitle}</h3>
                  <h2>{d.title}</h2>
                  <p>
                    {d.desc}
                  </p>
                  <p>{d.languages}</p>
                  <div className="links">
                    <a href={d.demo}>Website</a>
                    <a href={d.code}>Code</a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img 
                src={d.img} 
                alt=""
                />
              </div>
            </div>
          </div>))
        }
      </div>
      <img src="assets/right.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/right.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
    </div>
  )
}
