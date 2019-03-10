import React from 'react';
import './Tile.scss';

const Tile = (props) => {
  return (
    <div className="Tile">
      <div>{props.details.id}</div>
      <div className="Tile-Icon">{props.details.icon}</div>
      <div>{props.details.title}</div>
      <div>{props.details.hp} HP</div>
      <div>{props.details.type}</div>
    </div>
  );
};

export default Tile;