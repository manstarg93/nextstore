import { ButtonContainer } from './Button.styled';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isActive?: boolean;
}

const Button = ({ children, onClick, isActive, type }: ButtonProps) => {
  return (
    <ButtonContainer type={type} isActive={isActive} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};
export default Button;
