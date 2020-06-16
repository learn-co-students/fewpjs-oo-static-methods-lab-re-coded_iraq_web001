class Formatter {
  //add static methods here
  static capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
  static sanitize(name){
    return name.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  static titleize(name){
  let arrPro=[]
  let nameArr=name.split(' ');
  nameArr.map(word =>{
   if(word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from')
   {
     arrPro.push(word.charAt(0).toUpperCase() + word.slice(1));
    
   }
   else{
     arrPro.push(word);
   }
  
  })
   return arrPro.join(' ').charAt(0).toUpperCase() + arrPro.join(' ').slice(1);
  }
}