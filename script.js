/*
 * Complete the 'funnyString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function funnyString(s) {
    let asciiValues = [];
    let reverseValues = [];
    //find ascii numbers
    for(let i = 0; i < s.length; i++) {
      asciiValues.push(s.charCodeAt(i));
      reverseValues.unshift(s.charCodeAt(i))
    }

    //find difference in numbers and check to see if same
    for(let i = 0; i < s.length - 1; i++) {
      if(Math.abs(asciiValues[i] - asciiValues[i + 1]) !== Math.abs(reverseValues[i] - reverseValues[i + 1])) {
        return 'Not Funny';
      }
    }
    return 'Funny';
}
