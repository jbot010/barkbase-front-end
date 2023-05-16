import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const ButtonA = ( props ) => {
  return ( 
    <Button variant="contained" size="small" href={props.path}>
      {props.content}
    </Button>
  );
  }
export default ButtonA;