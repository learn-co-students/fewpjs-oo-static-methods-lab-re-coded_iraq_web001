class Formatter {
  static capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
static sanitize(str){
  return str.replace(/[^A-Za-z0-9-' ]+/g, '');
}
static titleize(str) {
  let nonCapitalizeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
  let newString = str.split(' ').map(word => nonCapitalizeWords.includes(word) ? word : this.capitalize(word)).join(' ')
  return this.capitalize(newString)
}

}
