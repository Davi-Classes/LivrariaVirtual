import express from "express";
import cors from 'cors';

const db = [
  {
    titulo: "Ultra Aprendizado",
    autor: "Scott H. Young",
    ano: 2019,
    editora: "Moderno",
  },
  {
    titulo: "Harry Potter - A pedra filosofal",
    autor: "J. K. Rowlling",
    ano: 1999,
    editora: "Moderno",
  },
];

const app = express();
app.use(express.json());
app.use(cors());

// Rota para Listar os Livros
app.get("/livros", (req, res) => {
  res.json(db);
});

// Rota para Cadastrar os Livros
app.post("/livros", (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      message: "O campo titulo é obrigatório.",
    });
  }

  if (!body.titulo) {
    return res.status(400).json({
      message: "O campo titulo é obrigatório.",
    });
  }

  if (!body.autor) {
    return res.status(400).json({
      message: "O campo autor é obrigatório.",
    });
  }

  console.log(body)
  if (!body.ano) {
    return res.status(400).json({
      message: "O campo ano é obrigatório.",
    });
  }

  const ano = Number(ano);

  if (isNaN(ano)) {
    return res.status(400).json({
      message: "O campo ano deve ser um valor inteiro.",
    });
  }

  const novoLivro = {
    titulo: body.titulo,
    autor: body.autor,
    ano: body.autor,
    editora: body.editora,
  };

  db.push(novoLivro);
  res.status(201).json({
    message: "Livro cadastrado com sucesso.",
  });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000."));
