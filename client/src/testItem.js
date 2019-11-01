import React from 'react';

export default function Test(props) {
  return (
      <div className="item">
        <img src={props.img} alt='' />
        <p>{props.text}</p>
      </div>
  )
}