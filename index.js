class Formatter {
  static capitalize(string){
    return string[0].toUpperCase()+string.slice(1,string.length);
  }
  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '')
  }
  static titleize(str){
    let data = str.split(' ')
    data[0] = this.capitalize(data[0])
    for(let i = 0; i < data.length; i++){
      switch(data[i]){
        case 'the':
          break;
        case 'a':
          break;
        case 'an':
          break;
        case 'from':
          break;
        case 'but':
          break;
        case 'of':
          break;
        case 'and':
          break;
        case 'at':
          break;
        case 'by':
          break;
        case 'for':
          break;
        default:
          data[i] = this.capitalize(data[i])
          break;
        
      }
    }
    str = ''
    for(let i = 0; i < data.length-1; i++){
      str += data[i]+' '
    }
    return str+data[data.length-1];
  }
}
console.log(Formatter.titleize('dkhfdklhd dhsffh the'))