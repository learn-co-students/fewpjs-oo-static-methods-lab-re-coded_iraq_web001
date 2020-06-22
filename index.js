  class Formatter {
    //add static methods here
    static capitalize(word){
      return word[0].toUpperCase() + word.split("").slice(1).join("")
    }
    static sanitize(word){
      return word.replace(/[^'\w\s-]/g,"")
    }
    static titleize(string){
      let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
      return (string.charAt(0).toUpperCase() + string.split(' ').map(word => exceptions.includes(word) ? word :word[0].toUpperCase() + word.split("").slice(1).join("") ).join(" ").slice(1))
    }

  }
