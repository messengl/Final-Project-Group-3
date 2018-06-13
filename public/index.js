var bar = document.getElementById('bar');
var pie = document.getElementById('pie');
var scatter = document.getElementById('scatter');
var table = document.getElementById('table');
var modal = document.getElementById('modal');
var backdrop = document.getElementById('modal-backdrop');

function showmodal()  {
  if(event.target.classList.contains('data-link')) {
    modal.classList.remove('hidden');
    backdrop.classList.remove('hidden');
    bar.innerHTML = '<a href="bar/' + event.target.id + '">Bar Graph</a> ';
    pie.innerHTML = '<a href="pie/' + event.target.id + '">Pie Chart</a> ';
    scatter.innerHTML = '<a href="scatter/' + event.target.id + '">Scatter Plot</a> ';
    table.innerHTML = '<a href="table/' + event.target.id + '">Table</a> ';
  }
  if(event.target.id == "close-modal-button") {
    modal.classList.add('hidden');
    backdrop.classList.add('hidden');
    bar.innerHTML = "";
    pie.innerHTML = "";
    scatter.innerHTML = "";
    table.innerHTML = "";
  }
}

window.addEventListener('click', showmodal)
