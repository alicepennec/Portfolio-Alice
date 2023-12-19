import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
frontEnd,
backEnd,
versionControl} from "../../data"

export default function Portfolio() {

  const [selected, setSelected] = useState("stack1"); 
  const [data, setData] = useState([]);
  const list = [
    {
      id: "stack1",
      title: "Front-end"
    },
    {
      id: "stack2",
      title: "Back-end"
    },
    {
      id: "stack3",
      title: "Version Control"
    },
  ]

  useEffect(()=>{
    switch(selected){
        case "stack1":
        setData(frontEnd);
        break;
        case "stack2":
        setData(backEnd);
        break;
        case "stack3":
        setData(versionControl);
        break;
        default: setData(frontEnd);
    }
  }, [selected])

  return (
    <div className="portfolio" id="expertise">
      <h1>My expertise</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
          title={item.title}
          active={selected === item.id}
          setSelected={setSelected}
          id={item.id}
          />
        ))}
      </ul>
      <div className="container">
          {data.map((d) => (
            <div className="item" key={d.id}>
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}
      </div>
    </div>
  )
}
