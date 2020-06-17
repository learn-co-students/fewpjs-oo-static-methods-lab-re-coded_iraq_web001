class Formatter {
  //add static methods here
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
     return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize (string){
    const  noEffect = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];

return string.split(' ').reduce((a,e,i)=>{
  if(i===0)
  return Formatter.capitalize(e);

if(noEffect.includes(e)){
  a+=' '+e;
} else {
  a+= ' '+Formatter.capitalize(e);
}
return a;
},'');


  }
}
