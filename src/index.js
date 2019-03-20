/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var counter = 0;
  preferences.forEach(function(elem, index) {
      var position = index + 1;
      var elem2 = preferences[elem - 1];
      var elem3 = preferences[preferences[elem - 1] - 1];
      if (elem != position && 
          elem2 != elem3 &&
          elem3 == position)
              counter++;
  })
  return counter / 3;
};



