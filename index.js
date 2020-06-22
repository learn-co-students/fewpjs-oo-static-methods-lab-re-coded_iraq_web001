  
  
  class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  
  static titleize(str){
    let word = str.split(' ');
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    word[0] = this.capitalize(word[0]);
    for (let w = 1; w < word.length; w++) {
      if(!except.find(nonWord => nonWord == word[w])){
         word[w] = this.capitalize(word[w]);
      }
    }
    
    return word.join(' ');
}
}
  
  
  
  
  // class Formatter {
  //   //add static methods here
  //   static capitalize(word){
  //     return word[0].toUpperCase() + word.split("").slice(1).join("")
  //   }
  //   static sanitize(word){
  //     return word.replace(/[^'\w\s-]/g,"")
  //   }
  //   static titleize(string){
  //     let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
  //     return (string.charAt(0).toUpperCase() + string.split(' ').map(word => exceptions.includes(word) ? word :word[0].toUpperCase() + word.split("").slice(1).join("") ).join(" ").slice(1))
  //   }

  // }