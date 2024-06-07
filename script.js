// API
const API = "https://livrariavirtual.onrender.com";

// Criando o array onde armazenare-mos os livros
let livrosData = [];

// Criando uma função para listar os livros no HTML
function listarLivros(livros) {
  // Buscando tag "tbody" do HTML para colocar os dados
  const tableLivro = document.getElementById("data-livro");

  // Limpando o que já tem para mostrar somente o que foi passado como parametro
  tableLivro.innerText = "";

  // Percorrendo os livros com a função "map"
  // Para cada livro, faça: ...
  livros.map((livro) => {
    // Criando Linha da Tabela
    const tr = document.createElement("tr");

    // Criando celula do titulo
    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = livro.titulo;

    // Criando celula do autor
    const tdAutor = document.createElement("td");
    tdAutor.textContent = livro.autor;

    // Criando celula do ano
    const tdAno = document.createElement("td");
    tdAno.textContent = livro.ano;

    // Criando celula da editora
    const tdEditora = document.createElement("td");
    tdEditora.textContent = livro.editora;

    // Adicionando celulas na linha
    tr.appendChild(tdTitulo);
    tr.appendChild(tdAutor);
    tr.appendChild(tdAno);
    tr.appendChild(tdEditora);

    // Adicionando linha na tabela que mostra no HTML
    tableLivro.appendChild(tr);
  });
}

// Função que irá lidar com o evento de "load"
// o load é chamado quando o elemento carrega
function handleCarregarLivros() {
  fetch(`${API}/livros`)
    .then(response => response.json())
    .then(data => {
       livrosData.push(...data)
       listarLivros(livrosData)
    })
}

// Vinculando a função com o evento de load da janela
window.addEventListener("load", handleCarregarLivros);

// Função que irá lidar com evento de "submit" do formulário
// para cadastrar o livro
function handleCadastrarLivro(event) {
  event.preventDefault();

  const form = event.target;

  const novoLivro = {
    titulo: form.titulo.value,
    autor: form.autor.value,
    ano: Number(form.ano.value),
    editora: form.editora.value,
  };

  livrosData.push(novoLivro);
  listarLivros(livrosData);

  form.reset();
}

// Vinculando a função ao formulário
// Buscando formulário do HTML
const formCadastroLivro = document.getElementById("form-livro");

// Vinculando a função com o evento de submit do formulário de cadastro de livro
formCadastroLivro.addEventListener("submit", handleCadastrarLivro);
