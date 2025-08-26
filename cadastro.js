document.addEventListener('DOMContentLoaded', function() {
  const cadastroLink = document.getElementById('cadastro-link');

  if (cadastroLink) {
    cadastroLink.addEventListener('click', function(event) {
      event.preventDefault(); // Impede o link de abrir
      alert('Esta página ainda está em desenvolvimento!');
    });
  }
});
