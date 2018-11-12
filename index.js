function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lis = document.querySelectorAll('ul.ranked-list li');
  for (let i = 0; i < lis.length; i++) {
    let inner = parseInt(lis[i].innerHTML, 10);
    inner += n;
    lis[i].innerHTML = inner;
  }
}

function deepestChild() {
  let mainDiv = document.getElementById('grand-node');
  let childDiv = mainDiv.children[0];
  while (childDiv) {
    mainDiv = childDiv;
    childDiv = mainDiv.children[0];
  }
  return mainDiv;
}
