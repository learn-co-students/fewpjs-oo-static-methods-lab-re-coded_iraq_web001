class Formatter {
  //add static methods here

  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str){
      return str.replace(/[^\w,'-\s]/gi, '')

     
       }
       static titleize(str){
        let exculdedWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
           
          
           
           let mappedStr = this.capitalize(str.split(' ').map(data => {
               if(exculdedWords.includes(data)){
                   return data
               }else{
                   return this.capitalize(data)
               }
           }).join(' '))

           return mappedStr
       } 
       
}
