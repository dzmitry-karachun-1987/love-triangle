/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var i = 0;
  var count = 0;
  for(i=0;i<preferences.length;i++){
    var first = preferences[i];
    var second = preferences[first-1]
    if(preferences[second-1]== i+1) count ++;
  }
  return Math.floor(count/3);

};
