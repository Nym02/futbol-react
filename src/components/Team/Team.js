import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Team = (props) => {
  const team = props.team;
  console.log(team);

  const { idTeam, strTeamBadge, strTeam, strSport } = team;
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4 col-xl-4  mt-4">
        <div className="card">
          <img className="card-img-top" src={strTeamBadge} alt="" />
          <div className="card-body">
            <h5 className="card-title">{strTeam}</h5>
            <p>Sport Type: {strSport}</p>

            <a href={`/team/${idTeam}`} className="btn btn-primary">
              Explore <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
