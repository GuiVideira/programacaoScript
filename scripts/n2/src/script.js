$(document).ready(function() {
  var currentIndex = 0;
  var items = $('.carousel-item');

  // Exibe o item atual
  function showItem(index) {
    items.removeClass('active');
    items.eq(index).addClass('active');
  }

  // Avança para o próximo item
  function nextItem() {
    currentIndex++;
    if (currentIndex >= items.length) {
      currentIndex = 0;
    }
    showItem(currentIndex);
  }

  // Volta para o item anterior
  function prevItem() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = items.length - 1;
    }
    showItem(currentIndex);
  }

  // Evento do botão próximo
  $('#nextBtn').on('click', function() {
    nextItem();
  });

  // Evento do botão anterior
  $('#prevBtn').on('click', function() {
    prevItem();
  });

  // Inicia o carrossel
  showItem(currentIndex);
});
