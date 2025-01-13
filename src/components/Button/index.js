import { ButtonConateiner } from "./styles"



const  Button = ({label, onClick}) => {
    return (
      <ButtonConateiner onClick={onClick} type='button'>
       {label}
      </ButtonConateiner>
    );
  }
  
  export default Button;
  