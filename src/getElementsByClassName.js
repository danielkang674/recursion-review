// If life was easy, we could just do things the easy way:
// var getElementsByClassNaame = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  
  let doc = document.body;
  let targetClassArray = [];

  let checkChildren = function(childArray){

    if(childArray.classList.contains(className)){
      targetClassArray.push(childArray);
    }

    if(childArray.hasChildNodes()){
      for(var i = 0; i < childArray.children.length; i++){
        checkChildren(childArray.children[i]);
      } 
    }
  };

  checkChildren(doc);

  return targetClassArray;
};
