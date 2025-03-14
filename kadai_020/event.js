const eventbtn = document.getElementById('btn');
const text = document.getElementById('text');

eventbtn.addEventListener('click', () => {

  text.textContent='ボタンをクリックしました';
});