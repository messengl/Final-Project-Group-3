
var modal = document.getElementById('modal');
var backdrop = document.getElementById('modal-backdrop');

function showmodal()  {
  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
}

window.addEventListener('click', showmodal);
