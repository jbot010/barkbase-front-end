import { Button } from "@mui/material";

const ButtonA = ( props ) => {
  return ( 
    <Button variant="contained" size="small" href={props.path}>
      {props.content}
    </Button>
  );
  }
export default ButtonA;