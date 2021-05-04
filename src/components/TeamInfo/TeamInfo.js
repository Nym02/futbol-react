import React from "react";
import maleImg from "../../img/male.png";
import femaleImg from "../../img/female.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./TeamInfo.css";

const TeamInfo = (props) => {
  const {
    strTeam,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strFacebook,
    strTwitter,
    strInstagram,
    strYoutube,
  } = props.teamInfo;
  return (
    <>
      <div className="row team-content-row">
        <div className="col-md-6 col-sm-12">
          <div className="team-info">
            <h2 className="heading-team-info">{strTeam}</h2>

            <div className="team-founded">
              <span className="team-founded-icon">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <p className="team-founded-info">Founded: {intFormedYear} </p>
            </div>
            <div className="team-founded">
              <span className="team-founded-icon">
                <FontAwesomeIcon icon={faFlag} />
              </span>
              <p className="team-founded-info">Country: {strCountry} </p>
            </div>
            <div className="team-founded">
              <span className="team-founded-icon">
                <FontAwesomeIcon icon={faFutbol} />
              </span>
              <p className="team-founded-info">Sports Type: {strSport} </p>
            </div>
            <div className="team-founded">
              <span className="team-founded-icon">
                <FontAwesomeIcon icon={faMars} />
              </span>
              <p className="team-founded-info">Gender: {strGender} </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <img
            src={strGender === "Male" ? maleImg : femaleImg}
            alt=""
            className="teamGender"
          />
        </div>
      </div>

      <div className="team-description">
        <p className="team-description-info">{strDescriptionEN}</p>
      </div>

      <div className="team-social-media">
        <span className="facebook facebook-icon">
          <a href={"https://" + strFacebook} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </span>
        <span className="facebook twitter-icon">
          <a href={"https://" + strTwitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </span>
        <span className="facebook instagram-icon">
          <a href={"https://" + strInstagram} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </span>
        <span className="facebook youtube-icon">
          <a href={"https://" + strYoutube} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </span>
      </div>
    </>
  );
};

export default TeamInfo;
