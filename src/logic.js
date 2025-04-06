//Do not change anything in this file////////////////////////
// Import this function to index.js
// Use this test to calculate the star average
// Given an array of reviews it should return the average of that array.
export const calculateStarAverage = (reviewsArr) => {
  const sum = reviewsArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.star,
    0
  );
  const averageStar = sum / reviewsArr.length;
  return averageStar;
};

