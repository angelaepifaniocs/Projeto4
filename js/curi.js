var TrandingSlider = new Swiper('.topic-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

// Imagens iniciais (uma por slide, correspondendo aos índices 0-6)
const imagensIniciais = [
  'animais/onca.png',
  'animais/arara.png',
  'animais/boto.png',
  'animais/capivara.png',
  'animais/guara.png',
  'animais/mico.png',
  'animais/tamandua.png'
];

// Imagens externas específicas (uma por slide, não entre as 7 iniciais)
const imagensExternas = [
  'animais/1.png',  // Para slide 1 (índice 0)
  'animais/2.png',  // Para slide 2 (índice 1)
  'animais/3.png',  // Para slide 3 (índice 2)
  'animais/4.png',  // Para slide 4 (índice 3)
  'animais/5.png',  // Para slide 5 (índice 4)
  'animais/6.png',  // Para slide 6 (índice 5)
  'animais/7.png'   // Para slide 7 (índice 6)
];

// Função para trocar a imagem no slide específico
function trocar(button) {
  const slide = button.closest('.topic-slide');
  const img = slide.querySelector('.figura');
  const slideIndex = parseInt(slide.getAttribute('data-slide-index'));
  
  // Verifica se a imagem atual é a inicial ou a externa
  const imagemInicial = imagensIniciais[slideIndex];
  const imagemExterna = imagensExternas[slideIndex];
  
  if (img.src.includes(imagemInicial.split('/').pop())) {
    // Se estiver na inicial, vai para a externa
    img.src = imagemExterna;
  } else {
    // Se estiver na externa, volta para a inicial
    img.src = imagemInicial;
  }
}

// Adiciona event listeners aos botões após o DOM carregar
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.trocar-btn');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      trocar(this);
    });
  });
});