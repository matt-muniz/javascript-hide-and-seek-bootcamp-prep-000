function getFirstSelector(selector){
  var first = document.querySelector(selector);
  return first
}

function nestedTarget(){
  var first = document.getElementById("nested").querySelector(".target")
  return first
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li');
   
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML++
}
return lis
}
function deepestChild(){
  document.getElementById("grand-node").querySelector("div");
}
