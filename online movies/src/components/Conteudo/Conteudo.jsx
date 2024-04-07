// import { useState, useEffect } from "react";
// import axios from "axios";


// export default function Conteudo() {
    
//   const [genero, setGenero] = useState("animation");
//   const [busca, setBusca] = useState("");
//   const [filmes, setFilmes] = useState([]);

//   // Requisição
//   async function buscadados() {
//     const dados = await axios.get(`https://api.sampleapis.com/movies/${genero}`);
//     setFilmes(dados.data);
//   }

//   // useEffect
//   useEffect(() => {
//     buscadados();
//   }, [genero]);

//   const filtrados = filmes.filter((item) =>
//     item.title.toLowerCase().includes(busca.toLowerCase())
//   );

//   return (
//     <>
    
    
//     </>
//   )
// }
