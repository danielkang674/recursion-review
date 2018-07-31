// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let jsonString = '';

  let primitiveToString = function(obj) {
  // primitive types
    if (typeof obj === 'boolean' || typeof obj === 'number'){
      return obj.toString();
    }
    if (typeof obj === 'string'){
      return '"' + obj + '"';
    }
    if (obj === null || obj === Infinity || obj === NaN){
      return 'null';
    }
    if(typeof obj === 'function'  || obj === undefined){
      return;
    }
   
    // for arrays
    if (Array.isArray(obj)){
      let tempArrayStr = '';

      if(obj.length === 0){
        return '[]';
      }

      for(let i = 0; i < obj.length; i++){
        if(i !== obj.length && i !== 0){
          tempArrayStr = tempArrayStr + ',' + (primitiveToString(obj[i]));  
        }else{
          tempArrayStr = tempArrayStr + (primitiveToString(obj[i])); 
        }
        }
        return '[' + tempArrayStr + ']';
      }

    //for objects
    if(typeof obj === 'object'){
      let tempObjStr = '';
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      if(keys.length === 0){
        return '{}';
      }
      for(let i = 0; i < keys.length; i++){
        if(typeof obj[keys[i]] === 'function' || obj[keys[i]] === undefined){
          return '{}';
        } else if(i !== keys.length && i !== 0){
          tempObjStr += ',' + '"' + keys[i] + '":' + primitiveToString(obj[keys[i]]);
        } else {
          tempObjStr += '"' + keys[i] + '":' + primitiveToString(obj[keys[i]]);
        }
      }
      return '{' + tempObjStr + '}';
    }  
      
    };
  
  return primitiveToString(obj);
  
};
