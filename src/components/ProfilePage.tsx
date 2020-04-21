import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { getUserProfile } from "../data/queries";
import {
  Get_User_ProfileQuery,
  Get_User_ProfileQueryVariables
} from "../generated/graphql";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faStar,
  faStickyNote,
  faClock
} from "@fortawesome/free-solid-svg-icons";
import Iframe from "react-iframe";

const ProfilePage = () => {
  const { id } = useParams();
  const [starred, setStarred] = useState<Boolean>(false);
  const [note_written, setNoteWritten] = useState<Boolean>(false);
  const [reminder_created, setReminderCreated] = useState<Boolean>(false);

  const { loading, error, data } = useQuery<
    Get_User_ProfileQuery,
    Get_User_ProfileQueryVariables
  >(getUserProfile, {
    variables: {
      profileHandle: id || ""
    }
  });

  // handle loading
  if (loading) {
    return <div>loading...</div>;
  }

  // handle error
  if (error || !data) {
    console.log(error);
    return <div>error!</div>;
  }

  // handle cases where user cannot be found or multiple users are returned (shouldn't happen)
  const { User: users } = data;
  if (users.length !== 1) {
    return <div>can't find the user</div>;
  }

  const {
    cover_picture,
    profile_picture,
    first_name,
    last_name,
    logo_image_url,
    address,
    title,
    number
  } = users[0];

  return (
    <div className="profile-page">
      <div
        className="cover"
        style={{
          height: "400px",
          width: "100vw",
          background: `url(${cover_picture})`,
          backgroundSize: "cover"
        }}
      />
      {/* <div className="new-contact">New contact added!</div> */}
      <div className="profile-card">
        <div
          className="profile-pic"
          style={{
            background: `url(${profile_picture})`,
            backgroundSize: "cover",
            height: "70px",
            width: "70px"
          }}
        />
        <h2>
          {first_name} {last_name}
        </h2>

        <div className="company">
          {logo_image_url && (
            <div
              className="logo"
              style={{
                background: `url(${logo_image_url})`,
                backgroundSize: "contain",
                height: "28px",
                width: "68%"
              }}
            />
          )}
          <div className="line" />
          <p>{title}</p>
        </div>

        <div className="contact">
          <div>Address: {address}</div>
          <div>Mobile: {number}</div>
          {/* to fix: hardcoded */}
          <div>Email: kh736@cornell.edu</div>
        </div>

        <div className="actions">
          <div
            className={`action star ${starred && "activated"}`}
            onClick={() => setStarred(!starred)}
          >
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div
            className={`action note ${note_written && "activated"}`}
            onClick={() => setNoteWritten(!note_written)}
          >
            <FontAwesomeIcon icon={faStickyNote} />
          </div>
          <div
            className={`action reminder ${reminder_created && "activated"}`}
            onClick={() => setReminderCreated(!reminder_created)}
          >
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="linkedin-button">
            <FontAwesomeIcon icon={faLinkedin} />
            <span className="linkedin-button-text">LinkedIn</span>
            <div className="linkedin-tail"></div>
          </div>
        </div>
      </div>
      {/* <div className="motto">{motto}</div> */}

      <div className="main-card">
        <div className="main-card-container">
          <div className="line" />
          {/* TODO: make these into auto-imported data from LinkedIn */}
          <div className="one-line-intro">
            Facebook SWE Intern | Cornell Tech CM
          </div>

          <div className="skills">
            <div className="segment-title">Skills</div>
            <ul>
              <li className="entry">Financial Accounting</li>
              <li className="entry">Management Accounting</li>
              <li className="entry">Marketing</li>
            </ul>
          </div>

          <div className="tools-techs">
            <div className="segment-title">Tools & Technologies</div>
            <ul>
              <li className="entry">C++</li>
              <li className="entry">MeteorJS</li>
              <li className="entry">Javascript</li>
              <li className="entry">Wordpress</li>
              <li className="entry">React.js</li>
              <li className="entry">ES6</li>
            </ul>
          </div>
          {/* TODO-END */}

          <div className="line" />
          <div className="met">
            {/* to fix: hardcoded */}
            <p className="info">— Met today at Cornell Tech</p>
            <Iframe
              width="300"
              height="200"
              url="https://maps.google.com/maps?width=300&amp;height=200&amp;hl=en&amp;q=Cornell Tech&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              frameBorder={0}
              position="relative"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
