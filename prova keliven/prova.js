let usuarios = [];
function adicionarUsuario(nome, idade, email) {
    if (!nome || !idade || !email) {
        console.log("Todos os campos devem ser preenchidos.");
        return;
    }
    if (idade <= 0) {
        console.log("A idade deve ser maior que 0.");
        return;
    }
    let usuario = {
        nome: nome,
        idade: idade,
        email: email
    };
    usuarios.push(usuario);
    console.log("Usuário adicionado com sucesso!");
}
function listarUsuarios() {
    console.log("Usuários cadastrados:");
    usuarios.forEach((usuario, index) => {
        console.log(`${index + 1}. Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}`);
    });
}
adicionarUsuario("Renato", 42, "renato@prova.com");
adicionarUsuario("Luisa", 16, "luisa@prova.com");
listarUsuarios();