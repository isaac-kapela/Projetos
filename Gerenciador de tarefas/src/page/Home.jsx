//home
import Forms from "../components/Forms";
import ItemLista from "../components/ItemLista";
import { Container, List } from "@mui/material";
import { useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);

    const tarefasHandler = (todo) => {
        console.log(todo);
        // setTodos([...todos, todo]); // Certifique-se de definir corretamente `todo` antes de usá-lo aqui
    }

    return (
        <Container maxWidth="xs" style={{ marginTop: "1em" }}>
            <Forms tarefasHandler={tarefasHandler}/>
            <List sx={{ marginTop: "1em" }}>
                {todos.map((todo, index) => ( // Adicione um `key` único aqui
                    <div key={index} style={{marginTop:"1em"}}>
                        <ItemLista todo={todo} />
                    </div>
                ))}
            </List>
        </Container>
    )
}
