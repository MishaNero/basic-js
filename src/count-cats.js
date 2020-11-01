module.exports = function countCats(data) {
  let count = 0;
  data.forEach(arr => {
    arr.forEach(el => {
      if (el === `^^`) {
        count++;
      }
    });
  });
  return count;
};
