class Formatter {
  //add static methods here
  static capitalize(st){
    return st.charAt(0).toUpperCase()+st.slice(1)
  }
  static sanitize(st){
    return st.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  static titleize(sentence){
    let except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let exception = []
    let arr = sentence .split(" ")
    for (let i = 0; i < arr.length; i++) {
      if (i == 0){
        exception.push(this.capitalize(arr[i]))

      }
      else{
        if (except.includes(arr[i]) ){
          exception.push(arr[i])
        }
        else{
          exception.push(this.capitalize(arr[i]))
        }
      }
    }
    return exception.join(" ")
  }
}
