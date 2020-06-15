class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'-\s]+/g, '');
  }

  static titleize(string) {
    let newArr = [];
    let a = [
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'the',
      'a',
      'an',
      'but',
      'of',
      'and',
      'for',
      'at',
      'by',
      'from',
    ];
    let words = string.split(' ');
    for (let word of words) {
      if (a.includes(word) && words.indexOf(word) == 0) {
        newArr.push(this.capitalize(word));
      } else if (a.includes(word)) {
        newArr.push(word);
      } else {
        newArr.push(word.charAt(0).toUpperCase() + word.slice(1));
      }
    }
    return newArr.join(' ');
  }
}

console.log(Formatter.capitalize('abdulbasit'));
console.log(Formatter.sanitize('ca$@#tching cold'));
console.log(Formatter.titleize('where the wild things are'));
console.log(Formatter.titleize('getting giggles'));
console.log(Formatter.titleize('chicken soup with rice and a few other songs'));
console.log(Formatter.titleize('Maurice a an but of and for at by from end'));
console.log(Formatter.titleize('a tale of two cities'));
console.log(Formatter.titleize('in the night kitchen'));
