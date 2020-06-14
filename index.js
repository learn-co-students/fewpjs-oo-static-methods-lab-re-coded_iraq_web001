class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^\w'-\s]/gi, '')
  }
  static titleize(string){
    let arr = string.split(' ');
    let newArr = []
    newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
    for(let i=1;i<arr.length;i++){
      if( arr[i] === "the" ||arr[i] ==="an"||arr[i] ==="of"||arr[i] ==="a"||arr[i] ==="for"||arr[i] ==="and"||arr[i] ==="at"||arr[i] ==="by"||arr[i] ==="from"||arr[i] ==="but" ){
newArr.push(arr[i])
      }
      else{
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
      }
    }
    return newArr.join(" ")

  }
}
