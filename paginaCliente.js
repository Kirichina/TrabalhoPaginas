let clientes = []; // Array para armazenar os clientes

    // Função para salvar ou editar um cliente
    function salvarCliente() {
        const id = document.getElementById('idCliente').value;
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        if (id) {
            // Editando cliente
            const index = clientes.findIndex(cliente => cliente.id == id);
            if (index !== -1) {
                clientes[index] = { id, nome, email, telefone };
            }
        } else {
            // Adicionando novo cliente
            const novoCliente = { id: Date.now(), nome, email, telefone };
            clientes.push(novoCliente);
        }

        // Limpar o formulário e atualizar a lista de clientes
        document.getElementById('formCliente').reset();
        document.getElementById('idCliente').value = '';
        atualizarTabela();
    }

    // Função para atualizar a tabela de clientes
    function atualizarTabela() {
        const tbody = document.querySelector('#tabelaClientes tbody');
        tbody.innerHTML = '';
        clientes.forEach(cliente => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td class="actions">
                    <button class="edit" onclick="editarCliente(${cliente.id})">Editar</button>
                    <button onclick="deletarCliente(${cliente.id})">Excluir</button>
                </td>
            `;
            tbody.appendChild(row);
        });
    }

    // Função para editar um cliente
    function editarCliente(id) {
        const cliente = clientes.find(cliente => cliente.id == id);
        if (cliente) {
            document.getElementById('idCliente').value = cliente.id;
            document.getElementById('nome').value = cliente.nome;
            document.getElementById('email').value = cliente.email;
            document.getElementById('telefone').value = cliente.telefone;
        }
    }

    // Função para excluir um cliente
    function deletarCliente(id) {
        clientes = clientes.filter(cliente => cliente.id !== id);
        atualizarTabela();
    }