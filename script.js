document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".btn-filter");  // Classe correta
    const skillItems = document.querySelectorAll(".skill-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove a classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove("active"));
            // Adiciona a classe 'active' ao botão clicado
            button.classList.add("active");

            const filter = button.getAttribute("data-filter");

            // Mostrar ou ocultar os itens com base no filtro
            skillItems.forEach(item => {
                if (filter === "all" || item.classList.contains(filter)) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a classe 'active' ao botão 'Back-end' quando a página for carregada
    const backEndButton = document.querySelector('[data-filter="back-end"]');
    backEndButton.classList.add('active');

    // Filtra as habilidades para exibir apenas as de 'back-end' por padrão
    filterSkills('back-end');
});

function filterSkills(filter) {
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Adiciona a funcionalidade de filtro nos botões
const filterButtons = document.querySelectorAll('.btn-filter');
filterButtons.forEach(button => {
    button.addEventListener('click', function () {
        filterSkills(button.getAttribute('data-filter'));
        
        // Remove a classe 'active' de todos os botões e adiciona no botão clicado
        filterButtons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});
