import "./Button.css";

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <button type="button" className={`main-button ${children.toLowerCase()}`}>
      {children}
    </button>
  );
};

export default Button;
