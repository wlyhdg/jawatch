document.querySelector('.sand').addEventListener('click', () => {
  let sandbar = document.querySelectorAll('.sandline')
  let body = document.querySelector('body');
  let nav = document.querySelector('nav');
  console.log(sandbar);
  sandbar[0].classList.toggle("phantom");
  sandbar[1].classList.toggle("drop-fx");
  sandbar[2].classList.toggle("phantom");
  body.classList.toggle('dark');
  nav.classList.toggle('dark-n8n');
})