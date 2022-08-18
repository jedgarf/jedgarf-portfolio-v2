import React from "react";
import ProjectLanguages from "../projectLanguages/ProjectLanguages";
import "./ProjectCard.css";
import { Fade } from "react-reveal";
import { style } from "glamor";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

export default function ProjectCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    if(url != ""){
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  const styles = style({
    color: "rgb(88, 96, 105)",
    backgroundColor: "rgb(255, 255, 255)",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 30px -15px",
    padding: "2rem",
    // cursor: "pointer",
    borderRadius: "5px",
    height: "100%",
    transition: "all 0.2s ease-in-out",
    ":hover": {
      boxShadow: `${theme.imageDark} 0 2px 15px`,
    },
  });

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
        {...styles}
          key={repo.id}
          onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.projectCard }}
        >
          <img src={require(`../../assests/images/${repo.image}`)} style={{width: '300px', height: '200px'}} alt="photo" /><br/><br/>
          <div className="repo-name-div">
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
          <ProjectLanguages logos={repo.languages} />
            {/* <div className="row">
              <div className="col-md-10 col-lg-10">
                <ProjectLanguages logos={repo.languages} />
              </div>
              <div className="col-md-2 col-lg-2">
                <button type="button" className="btn btn-danger" style={{backgoundColor: 'red', float: 'right'}} onClick={() => openRepoinNewTab(repo.url)}>Visit</button>
              </div>
            </div> */}
            
          </div>
        </div>
      </Fade>
    </div>
  );
}
