/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus = "family",
  knowsProgramming = true,
  config = { family: 4 }
) {
  const basicHour = 500;
  const masterHour = 800;

  let weeks = 0;
  if (knowsProgramming === true) {
    weeks = Math.ceil(masterHour / config[focus]);
  } else {
    weeks = Math.ceil((masterHour + basicHour) / config[focus]);
  }

  return weeks;
};
