import React from 'react';

function profilElem(props) {
  return (
    <div className="Contact">
      <img className="avatar" alt={props.name} src={props.avatar}></img>
      <div>
        <p className="name">{props.name}</p>
        <div className="status">
          <div
            className={props.online ? 'status-online' : 'statut-offline'}
          ></div>
          <p className="status-text">{props.online ? 'online' : 'offline'}</p>
        </div>
      </div>
    </div>
  );
}

export default profilElem;
