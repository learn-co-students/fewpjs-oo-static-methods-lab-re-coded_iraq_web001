class Formatter {
  //add static methods here
  static capitalize (string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}
static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    const odds = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let ArrayOfString = string.split(" ");
    ArrayOfString.splice(
      0,
      1,
      ArrayOfString[0].charAt(0).toUpperCase() + ArrayOfString[0].slice(1)
    );
    console.log(ArrayOfString);
    //console.log(odd);
    let mappped = ArrayOfString.map(word => {
      if (odds.includes(word)) {
        return word;
      } else {
        return this.capitalize(word)
      }
    });
    return mappped.join(' ');
  }




}
