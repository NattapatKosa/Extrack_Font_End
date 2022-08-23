import React from "react";
import ButtonAddAct from "../ButtonAddAct/ButtonAddAct";

import "./ProfileSession.css";

const ProfileSession = ({ user }) => {

  let age = 99
  let birthdate = ''
  // if (!user.date_of_birth) {
  //   birthdate = user.date_of_birth.slice(0, 10);
  //   birthdate = '1998-08-23';
  // let year = Number(1998)
  // let today = new Date();
  // age = today.getFullYear() - year
  // }



  return (
    <div className="subconright-dash">
      <div className="downright-dash">
        <div className="content1">
          <div className="nameprofile">
            <h2>{user.name || 'Anonymous'}</h2>
            <p>@{user.username || 'username'}</p>
          </div>
          <p className="inspiration-input-profile">{user.inspiration}</p>
        </div>
        <div className="content2">
          <div className="height">
            <p>Height</p>
            <h2>{user.height || '-'}</h2>
          </div>
          <div className="weight">
            <p>Weight</p>
            <h2>{user.weight || '-'}</h2>
          </div>
        </div>
        <div className="content3">
          <p className="profile-bio">Bio</p>
          <div className="perdata">
            <p>Name: {user.name || 'Anonymous'}</p>
            <p>Birth Date: {birthdate || (new Date()).toString()}</p>
            <p>Age: {age || '99'}</p>
          </div>
          {/* <ButtonAddAct /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileSession;
