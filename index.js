function getFirstQuerySelector(selector){
  var first = document.getElementById().querySelector();
  return first
}

function nestedTarget(){
  document.getElementById(nested).querySelector(div.target);
}

function increaseRankBy(n){
  const lis = document
  .getElementById('app')
  .querySelectorAll('ul.ranked-list li');
   
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString();
}
}

