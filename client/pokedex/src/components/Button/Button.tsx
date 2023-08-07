import "./Button.css";

interface ButtonProps {
  children: string;
}

const Button: React.FC<ButtonProps> = ({ children }: ButtonProps) => {
  return (
    <div className="button-container">
    <button type="button" className={`main-button ${children.toLowerCase()}`}>
      {children}
    </button>
    </div>
  );
};

export default Button;
