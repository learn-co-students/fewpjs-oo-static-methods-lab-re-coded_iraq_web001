class Formatter {
  static capitalize(str) {
     return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize (str){
  return str.replace(/[^A-Za-z0-9-" "']+/g, '')
}
  static titleize(str){
   const exceptions = ['the','a', 'an', 'but', 'of', 'and', 'for', 'at','by','from']

    let myStr = str.split(" ");
    let arr = [];

    myStr.map(word=>{
      if(exceptions.includes(word) === false){
        arr.push(Formatter.capitalize(word));
      } else {
        arr.push(word);
      }
    })
    return Formatter.capitalize(arr.join(" "));
  }
}