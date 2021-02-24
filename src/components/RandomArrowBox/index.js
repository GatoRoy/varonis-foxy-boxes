'use strict'

import React from 'react'

import ArrowBox from '../ArrowBox'

const getRandomInt = (maxNumber) => {
  return Math.floor(Math.random() * Math.floor(maxNumber));
}

const getRandomDirection = () => {
  let randomDirection = "top";

  const randomInt = getRandomInt(4);
  switch (randomInt) {
    case 0:
      randomDirection = "top";
      break;
  
    case 1:
      randomDirection = "right";
      break;
  
    case 2:
      randomDirection = "bottom";
      break;
  
    case 3:
      randomDirection = "left";
      break;
  }

  return randomDirection;
};

const RandomArrowBox = () => {
  const randomDirection = getRandomDirection();
  return (
    <ArrowBox direction={randomDirection} />
  )
}

export default RandomArrowBox
