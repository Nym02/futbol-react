import React, { useState, useEffect } from "react";
import Team from "../Team/Team";
import "./AllTeams.css";

const AllTeams = () => {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const dataTeams = data.teams;
        // console.log(dataTeams);
        setTeam(dataTeams);
      });
  }, []);
  return (
    <>
      <div className="football-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="football-banner-header">
                <h2 className="heading-football-banner">fútbol team</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="football-banner-content">
        <div className="container">
          <div className="row">
            {team.map((football) => {
              return <Team team={football}></Team>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTeams;
