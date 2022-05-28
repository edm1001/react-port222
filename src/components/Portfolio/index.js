import React from "react";
import Projects from "../Projects"


  const Portfolio = () => {
    return (
        <section className='box'>
            <h2 className='title'>Portfolio</h2>
            <Projects />
        </section>
    )
}
  // return (
  //   <section>
  //     <h2>My Projects</h2>
  //     <div className="flex-row">
  //       <a
  //         href="https://afternoon-harbor-62644.herokuapp.com/"
  //         target="_blank"
  //         rel="noreferrer"
  //       >
  //         <img className="link-img" alt="" />
  //       </a>
  //      </div>
  //      </section> 
  // );


export default Portfolio;