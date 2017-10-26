/**
 * returns an array of length (len(arr) * 5) that consists of duplicate values
 * @param  {[array]} arr [array to be duplicated]
 * @param  {[int]} n   [number of times to duplicate the array]
 * @return {[array]}     [final, duplicated array]
 */
function multiplyArray (arr, n) {
  return n ? [...arr, ...multiplyArray(arr, n - 1)] : []
}

module.exports = {
  multiplyArray
}
