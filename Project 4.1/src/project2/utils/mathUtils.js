export function getTopThreeScores(objList) {
    let sortedList = Array.from(objList);
    
    sortedList.sort(function(a, b) {
      return average(a.scores) - average(b.scores);
    });
    
    return sortedList.slice(0, 3);
}
  
export function average(numbers){
    if (numbers.length === 0){
      return Number.POSITIVE_INFINITY;
    }
    return numbers.reduce((total, current) => total + current, 0) / numbers.length;
}