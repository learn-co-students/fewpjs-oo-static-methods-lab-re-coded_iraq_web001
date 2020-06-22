class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  
  static titleize(string) {
    let arrayOfStringExceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let titleizedString = string.split(' ').map(word => arrayOfStringExceptions.includes(word) ? word : this.capitalize(word)).join(' ');
    return this.capitalize(titleizedString);
  }
}