// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  let targetBody = document.body;
  let bodyChildren = targetBody.children;
  let targetClassArray = [];

  let checkChildren = function(childArray){
    for(var i = 0; i < childArray.length; i++){
      if(childArray[i].className === className){
        targetClassArray.push(childArray[i]);  
        }
      if(childArray[i].children()){
        checkChildren(childArray[i]);      
      }
    } 
  };
  checkChildren(bodyChildren);

  return targetClassArray;
};
