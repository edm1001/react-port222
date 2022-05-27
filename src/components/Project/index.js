import React from "react";

function Project(props) {
  // const currentCategory = props

  return (
    <section>
      <h2>My Projects</h2>
      <div className="flex-row">
        <a
          href="enter travel diary app .com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="link-img" src={socialScoopPic} alt="" />
        </a>
       </div>
       </section> 
  );
};

export default Project;