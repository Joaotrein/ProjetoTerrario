// FUNCAO DO HEADER

const header = document.querySelector("header");

header.style.transition = 'background-color 0.2s ease-in-out';

window.addEventListener('scroll', function() {
  if (window.scrollY > 90) {
    header.style.backgroundColor = '#3e1401';
  } else {
    header.style.backgroundColor = '';
  }
});

// FUNCAO BOTAO TOPO

const botaoTopo = document.querySelector(".voltar_topo");
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botaoTopo.style.display = "block";
    } else {
      botaoTopo.style.display = "none";
    }
};

botaoTopo.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});