//ItemLista

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import { Paper } from "@mui/material";
import PropTypes from 'prop-types';


export default function ItemLista({tarefa}) {
    return (
        <Paper>
        <ListItem
            secondaryAction={
                <IconButton edge="end" aria-label="comments">
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
                <ListItemIcon>
                    <Checkbox edge="start" tabIndex={-1} disableRipple />
                </ListItemIcon>
                <ListItemText primary={tarefa.texto} />
            </ListItemButton>
        </ListItem>
        </Paper>
    );
}

ItemLista.propTypes = {
    tarefa: PropTypes.object.isRequired
  };