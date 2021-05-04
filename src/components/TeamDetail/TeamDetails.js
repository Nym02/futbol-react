import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import TeamInfo from "../TeamInfo/TeamInfo";
import "./TeamDetails.css";

const TeamDetails = () => {
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTeamDetails(data.teams[0]);
        console.log(data.teams);
      });
  }, [id]);

  const { strStadiumThumb, strTeamBadge } = teamDetails;

  const teamBanner = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0.7)), url('${strStadiumThumb}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  };
  return (
    <div>
      <div className="team-banner" style={teamBanner}>
        <Link to="/">
          <button className="btn btn-info">Home</button>
        </Link>
        <div className="team-logo-banner">
          <img src={strTeamBadge} className="teamLogo" alt="" />
        </div>
      </div>
      <div className="team-content-banner">
        <div className="container">
          <div className="row">
            <TeamInfo teamInfo={teamDetails}></TeamInfo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
