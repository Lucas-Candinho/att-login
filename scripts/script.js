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
            return true;
        }
    }
    return false;
}

// Essa função checa se a senha de um usuário existe
function checkPass(senha) {
    // Testa a variavel recebida "senha" com todos os elementos .senha do array
    for (let i = 0; i < users.length; i++) {
        if(senha == users[i].senha) {
            return true;
        }
    }
    return false;
}

// Função chamada ao clicar no botão "Entrar"
// Primeiramente ela checa se o nome do usuario NÃO EXISTE, com a função checkUser retornando o valor ao contrário (!checkUser), o mesmo processo segue com a função checkPass



function Entrar() {
    let nome = document.getElementById('nome').value;
    localStorage.setItem('nome', nome)
    let senha = document.getElementById('senha').value;
    localStorage.setItem('senha', senha)

    if (!(checkUser(nome))) {
        document.getElementById('user-not-found').style.display='block';
        return false;
    }

    if (!(checkPass(senha))) {
        document.getElementById('user-wrong-password').style.display='block';
        return false;
    }

    window.location.href = 'sucess.html';
    return true;
}

if (document.URL.includes("sucess.html")) {
    let nome = localStorage.getItem('nome');
    let senha = localStorage.getItem('senha');
    document.getElementById("user").textContent = nome;
    document.getElementById("password").textContent = senha;
}
