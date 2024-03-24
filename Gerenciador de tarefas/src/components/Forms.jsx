//Forms
import { TextField, Button, Paper } from "@mui/material";
import PropTypes from 'prop-types';
import { useState } from "react";


    export default function Forms({tarefasHandler}) {
    const [texto, setTexto] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (texto) => {
      const tarefasOBJT = {texto: texto,  id: id };
      setId(id + 1);
      tarefasHandler(tarefasOBJT)

    }

  return (

    <Paper style={{ padding: "1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <TextField id="outlined-basic" 
        label="Tarefas" variant="outlined" 
        onChange={(textoInseriso)=> setTexto(textoInseriso.target.value)} />
        <Button variant="text" onClick={() => todoCreate(texto)}>Adicionar</Button>
      </div>
    </Paper>
  );
}
Forms.propTypes = {
    tarefa: PropTypes.object.isRequired
  };