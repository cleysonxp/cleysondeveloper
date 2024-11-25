
function showTab(tabId) {
    // Esconde todas as abas
    document.querySelectorAll('.tab-content').forEach((content) => {
        content.classList.add('hidden');
    });

    // Remove a classe 'active-tab' de todos os botões
    document.querySelectorAll('.tab-btn').forEach((btn) => {
        btn.classList.remove('active-tab');
    });

    // Mostra a aba selecionada e adiciona a classe ativa ao botão correspondente
    document.getElementById(tabId).classList.remove('hidden');
    event.target.classList.add('active-tab');
}
