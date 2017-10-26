/**
 * Given a text and a max length,
 *  it slices the string and adds '...' at the end of it
 * @param  {[string]} text [text to be shortened]
 * @param  {[int]} len  [max length]
 * @return {[string]}      [text with ... if longer than len]
 */
function shortenText (text, len) {
  return text.length <= len ? text : `${text.substring(0, len)}...`
}

/**
 * Adds an indecator if the number is a thousand or a million
 * e.g:
 *    if count = 100, it returns 100
 *    if count = 1000, it returns 1K
 *    if count = 1000000, it returns 1M
 * @param  {[int]} count [the number to be processed]
 * @return {[string]}    [result]
 */
function handleCount (count) {
  const M = 1000000 // Million
  const K = 1000 // Thousand
  return count >= M ? `${count / M}M` : count >= K ? `${count / K}K` : `${count}`
}

module.exports = {
  shortenText,
  handleCount
}
