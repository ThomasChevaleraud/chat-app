import React from 'react';

const name = 'Lee Vasquez';
const avatar = 'https://randomuser.me/api/portraits/men/79.jpg';
const isOnline = true;

function profilElem() {
  return (
    <div className="Contact">
      <img className="avatar" alt="avatar" src={avatar}></img>
      <div>
        <p className="name">{name}</p>
        <div className="status">
          <div className="status-online"></div>
          <p className="status-text">Online</p>
        </div>
      </div>
    </div>
  );
}

export default profilElem;
