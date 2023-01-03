import * as Styled from "./styled";

const Button = ({ children, onClick, disabled, ...props }) => {
  return (
    <Styled.Button disabled={disabled} onClick={onClick} {...props}>
      {children}
    </Styled.Button>
  );
};

export default Button;
