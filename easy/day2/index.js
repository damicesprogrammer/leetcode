/**
 * @param {string}
 * @return {string}
 */
// 01/11/2024
var makeFancyString = function (s) {
  let j = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1] && s[i] !== s[i - 1]) {
      j.push(s[i]);
    } else if (s[i] !== s[i + 1]) {
      j.push(s[i]);
    }
  }

  s = j.join("");
  return s;
};
