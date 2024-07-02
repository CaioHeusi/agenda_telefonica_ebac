document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value.trim();
    let phone = document.getElementById('phone').value.trim();
    
    if (name === '' || phone === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Verifica se o telefone contém apenas números
    const phonePattern = /^\d{10,11}$/;
    if (!phonePattern.test(phone)) {
        alert('Formato inválido de telefone. Informe apenas números (10 ou 11 dígitos).');
        return;
    }
    
    // Verifica se o nome contém pelo menos dois nomes (nome e sobrenome)
    if (name.split(' ').length < 2) {
        alert('Informe o nome completo (nome e sobrenome).');
        return;
    }
    
    // Garante que a primeira letra do nome seja maiúscula
    name = name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    // Adiciona o contato na tabela
    const table = document.getElementById('contacts-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
    const nameCell = newRow.insertCell(0);
    const phoneCell = newRow.insertCell(1);
    
    nameCell.textContent = name;
    phoneCell.textContent = phone;
    
    // Limpa o formulário após adicionar o contato
    document.getElementById('contact-form').reset();
});
