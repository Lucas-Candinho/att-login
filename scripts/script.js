// Declara um usuário, que possui um nome, uma senha e permissões de administrador (ou não)
function User(nome, senha, ehAdmin) {
    this.nome = nome;
    this.senha = senha;
    this.ehAdmin = ehAdmin;
}

// Declaração de 2 usuarios, com nome | senha | permissões de administrador
const user1 = new User("Lucas", "1234", false);
const user2 = new User("Johann", "4321", false);

// Insere os dois usuários em um array usuário
let users = [user1, user2];

// Essa função checa se o nome de um usuário existe
function checkUser(nome) {
    // Testa a variavel recebida "nome" com todos os elementos .nome do array
    for (let i = 0; i < users.length; i++) {
        if(nome == users[i].nome) {
            return i; //retorna o index do usuário no array users
        }
    }
    return false;
}

// Essa função checa se a senha de um usuário existe, tomando uma senha e o index do usuário no array users
function checkPass(senha, user) {
    if(users[user].senha == senha) {
        return true;
    }
    return false;
}

// Essa função reseta os estilos das mensagens de erro no login
function resetStyles() {
    document.getElementById('user-not-found').style.display='none';
    document.getElementById('user-wrong-password').style.display='none';
}

// Função chamada ao clicar no botão "Entrar"
// Primeiramente ela checa se o nome do usuario NÃO EXISTE, com a função checkUser retornando o valor ao contrário (!checkUser), o mesmo processo segue com a função checkPass

function Entrar() {
    resetStyles();

    let nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome); // Adiciona uma variável "Valor" para o armazenamento local, tendo uma "chave" como seu par.
    let senha = document.getElementById('senha').value;
    localStorage.setItem('senha', senha); 

    if ((typeof checkUser(nome) != "number")) {
        document.getElementById('user-not-found').style.display='block';
        return false;
    }
    // A partir desse ponto, sabemos que o nome de usuário é válido

    // Checa se a senha digitada é a do usuário já validado, retorna falso caso não esteja
    if (!(checkPass(senha, checkUser(nome)))) {
        document.getElementById('user-wrong-password').style.display='block';
        return false;
    }

    // Troca para a tela de sucesso
    window.location.href = 'sucess.html';
    return true;
}

if (document.URL.includes("sucess.html")) {
    let nome = localStorage.getItem('nome');
    let senha = localStorage.getItem('senha');
    document.getElementById("user").textContent = nome;
    document.getElementById("password").textContent = senha;
}
