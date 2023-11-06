import React from "react";
import {Link} from "react-router-dom";
const Frontend = ({livros}) => (
  
  <main className="principal">
    <h2>Categoria Frontend</h2>
    {livros.filter((livro, index) => livro.categoria === "frontend")
      .map((livro) => (
        <div className="card" key={livro.id}>
          <div className="thumb">
            <img
              src={"/imagens/capas/" + livro.isbn.replace(/-/g, "") + ".jpg"}
              alt="Thumbnail da capa do livro ..."
            />
          </div>
         
              <Link to={`/livro/${livro.slug}`} key={livro.id}>
                {
                  <div className="detalhes">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.descricao.slice(0, 130) + "..."}</p>
                    <p>Leia mais &gt;</p>
                  </div>
                }
              </Link>
            
        </div>
      ))}
  </main>
);

export default Frontend;
