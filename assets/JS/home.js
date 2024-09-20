// autenticação de usuario para acessar a pagina home
window.onload = function () {
    const token = localStorage.getItem("token");


    if (!token) {
        alert("Você precisa estar logado para acessar esta página!");
        window.location.href = "./login.html";
    } else {
        const userLogado = JSON.parse(localStorage.getItem("userLogado"));
        const logado = document.querySelector("#logado");
        logado.innerHTML = `Olá ${userLogado.nome}`;
    }
};

const tbody = document.getElementById('tbody');


// array usuarios cadastrados
const usuarios = [
    { id: 1, nome: "Ana Silva", email: "ana.silva@example.com", idade: 28, telefone: "1234-5678", cidade: "São Paulo" },
    { id: 2, nome: "Carlos Oliveira", email: "carlos.oliveira@example.com", idade: 34, telefone: "2345-6789", cidade: "Rio de Janeiro" },
    { id: 3, nome: "Fernanda Lima", email: "fernanda.lima@example.com", idade: 22, telefone: "3456-7890", cidade: "Belo Horizonte" },
    { id: 4, nome: "João Santos", email: "joao.santos@example.com", idade: 45, telefone: "4567-8901", cidade: "Curitiba" },
    { id: 5, nome: "Mariana Costa", email: "mariana.costa@example.com", idade: 31, telefone: "5678-9012", cidade: "Salvador" },
    { id: 6, nome: "Pedro Ferreira", email: "pedro.ferreira@example.com", idade: 29, telefone: "6789-0123", cidade: "Fortaleza" },
    { id: 7, nome: "Lucas Martins", email: "lucas.martins@example.com", idade: 25, telefone: "7890-1234", cidade: "Manaus" },
    { id: 8, nome: "Juliana Almeida", email: "juliana.almeida@example.com", idade: 40, telefone: "8901-2345", cidade: "Recife" },
    { id: 9, nome: "Roberto Lima", email: "roberto.lima@example.com", idade: 37, telefone: "9012-3456", cidade: "Porto Alegre" },
    { id: 10, nome: "Tatiane Rocha", email: "tatiane.rocha@example.com", idade: 26, telefone: "0123-4567", cidade: "Belém" },
    { id: 11, nome: "Marcos Paiva", email: "marcos.paiva@example.com", idade: 33, telefone: "1234-5678", cidade: "Natal" },
    { id: 12, nome: "Camila Teixeira", email: "camila.teixeira@example.com", idade: 30, telefone: "2345-6789", cidade: "Goiânia" },
    { id: 13, nome: "Fábio Dias", email: "fabio.dias@example.com", idade: 41, telefone: "3456-7890", cidade: "São Luís" },
    { id: 14, nome: "Isabela Nunes", email: "isabela.nunes@example.com", idade: 24, telefone: "4567-8901", cidade: "Maceió" },
    { id: 15, nome: "Rafael Gomes", email: "rafael.gomes@example.com", idade: 36, telefone: "5678-9012", cidade: "Teresina" },
    { id: 16, nome: "Sofia Andrade", email: "sofia.andrade@example.com", idade: 29, telefone: "6789-0123", cidade: "Campo Grande" },
    { id: 17, nome: "Gustavo Ribeiro", email: "gustavo.ribeiro@example.com", idade: 38, telefone: "7890-1234", cidade: "João Pessoa" },
    { id: 18, nome: "Larissa Mendes", email: "larissa.mendes@example.com", idade: 27, telefone: "8901-2345", cidade: "Aracaju" },
    { id: 19, nome: "Vinícius Costa", email: "vinicius.costa@example.com", idade: 35, telefone: "9012-3456", cidade: "Florianópolis" },
    { id: 20, nome: "Eliane Freitas", email: "eliane.freitas@example.com", idade: 32, telefone: "0123-4567", cidade: "Vitória" },
    { id: 21, nome: "Thiago Pires", email: "thiago.pires@example.com", idade: 39, telefone: "1234-5678", cidade: "Cuiabá" },
    { id: 22, nome: "Patrícia Santos", email: "patricia.santos@example.com", idade: 23, telefone: "2345-6789", cidade: "Palmas" },
    { id: 23, nome: "Ricardo Barros", email: "ricardo.barros@example.com", idade: 42, telefone: "3456-7890", cidade: "Boa Vista" },
    { id: 24, nome: "Nina Almeida", email: "nina.almeida@example.com", idade: 26, telefone: "4567-8901", cidade: "Macapá" },
    { id: 25, nome: "Daniela Souza", email: "daniela.souza@example.com", idade: 31, telefone: "5678-9012", cidade: "Rio Branco" },
    { id: 26, nome: "César Lima", email: "cesar.lima@example.com", idade: 34, telefone: "6789-0123", cidade: "São Vicente" },
    { id: 27, nome: "Tatiane Dias", email: "tatiane.dias@example.com", idade: 29, telefone: "7890-1234", cidade: "Osasco" },
    { id: 28, nome: "Eduardo Carvalho", email: "eduardo.carvalho@example.com", idade: 38, telefone: "8901-2345", cidade: "Sorocaba" },
    { id: 29, nome: "Bianca Ferreira", email: "bianca.ferreira@example.com", idade: 24, telefone: "9012-3456", cidade: "São Bernardo do Campo" },
    { id: 30, nome: "Alan Pereira", email: "alan.pereira@example.com", idade: 35, telefone: "0123-4567", cidade: "Santos" }
];




// inicio funções do campo de cadastrar novo usuario
function cadastrarUsuario() {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const tel = document.getElementById('tel').value
    const email = document.getElementById('email').value
    const cidade = document.getElementById('cidade').value

    usuarios.push({ nome, idade, tel, email, cidade })

    LimparCamposCadastro()

}

function LimparCamposCadastro() {
    document.getElementById('nome').value = ''
    document.getElementById('idade').value = ''
    document.getElementById('tel').value = ''
    document.getElementById('email').value = ''
    document.getElementById('cidade').value = ''

}






// Exibir e filtrar usuarios na tabela
function filtrarUsuarios(input) {
    return usuarios.filter(usuario =>
        usuario.nome.toLowerCase().includes(input.toLowerCase()) ||
        usuario.email.toLowerCase().includes(input.toLowerCase()) ||
        usuario.cidade.toLowerCase().includes(input.toLowerCase()) ||
        usuario.telefone.toLowerCase().includes(input.toLowerCase()) ||
        usuario.idade.toString().includes(input)
    );
}

function exibirLista() {
    tbody.innerHTML = "";
    usuarios.forEach(user => {
        tbody.innerHTML +=
            `<tr>
            <td>${user.nome}</td>
            <td>${user.idade}</td>
            <td>${user.telefone}</td>
            <td>${user.email}</td>
            <td>${user.cidade}</td>
         </tr>`;
    });
}

function limparLista() {
    tbody.innerHTML = '';
    document.getElementById("inputBuscar").value = "";
}

function atualizarListaFiltrada() {
    const input = document.getElementById("inputBuscar").value;
    const usuariosFiltrados = filtrarUsuarios(input);


    tbody.innerHTML = "";


    usuariosFiltrados.forEach(usuario => {
        tbody.innerHTML +=
            `<tr>
            <td>${usuario.nome}</td>
            <td>${usuario.idade}</td>
            <td>${usuario.telefone}</td>
            <td>${usuario.email}</td>
            <td>${usuario.cidade}</td>
         </tr>`;
    });
}


document.getElementById("inputBuscar").addEventListener("input", atualizarListaFiltrada);




