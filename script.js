// Função para alternar a visibilidade do menu
function toggleMenu() {
    const nav = document.querySelector('nav ul.nav.no-search');
    nav.classList.toggle('showing');
}

// Event listener para o menu toggle
document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

// Função para alternar a visibilidade do menu com base na largura da janela
function checkWidth() {
    if (window.innerWidth <= 768) { // Altere 768 para o breakpoint desejado
        document.querySelector('.menu-toggle').style.display = 'block';
        document.querySelector('nav ul.nav.no-search').classList.add('showing'); // Mostra o menu automaticamente em dispositivos menores
    } else {
        document.querySelector('.menu-toggle').style.display = 'none';
        document.querySelector('nav ul.nav.no-search').classList.remove('showing'); // Esconde o menu em dispositivos maiores
    }
}

// Chama a função checkWidth toda vez que a janela é redimensionada
window.addEventListener('resize', checkWidth);

// Executa a função checkWidth inicialmente para configurar o estado correto do menu
checkWidth();

$(document).ready(function(){
    $('#whatsappButton').hover(function(){
        $(this).append('<div class="tooltip">Olá, em que podemos ajudar?</div>');
    }, function(){
        $(this).find('.tooltip').remove();
    });
});

