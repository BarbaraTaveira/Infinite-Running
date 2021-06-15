const cow = document.getElementById("cow");
const tree = document.getElementById("tree");
const score = document.getElementById("score");

document.addEventListener('keypress', (event) => {
  if (!cow.classList.contains('jump-animation')) {
    jump();
  }
})

function jump() {
  cow.classList.add("jump-animation");
  setTimeout(() =>
    cow.classList.remove("jump-animation"), 500);
}


setInterval(() => {
  const cowTop = parseInt(window.getComputedStyle(cow)
    .getPropertyValue('top'));
  const treeLeft = parseInt(window.getComputedStyle(tree)
    .getPropertyValue('left'));
  score.innerText++;

  if (treeLeft < 0) {
    tree.style.display = 'none';
  } else {
    tree.style.display = ''
  }

  if (treeLeft < 50 && treeLeft > 0 && cowTop > 150) {
    alert("Game Over \nPlay again?");
    location.reload();
  }
}, 50);


