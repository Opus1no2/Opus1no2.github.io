export const randVelocity = () => {
  let num = Math.random() * 0.1;
  num *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
  return num;
};

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

