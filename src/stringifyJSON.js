// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  let jsonString = '';

  let primitiveToString = function(obj) {
  // primitive types
    if(typeof obj === 'boolean' || Number.isInteger(obj)){
      return obj.toString();
    }
    if(typeof obj === 'string'){
      return '"' + obj + '"';
    }
    if(obj === null || obj === Infinity || obj === NaN){
      return 'null';
    }
    // for arrays
    if(Array.isArray(obj)){
      let tempArrayStr = '';
      for(let i = 0; i < obj.length; i++){
        tempArrayStr = tempArrayStr + ', ' + (primitiveToString(obj[i]));  
      }
      return '[' + tempArrayStr + ']';
    }
  };
  
  return primitiveToString(obj);
};
