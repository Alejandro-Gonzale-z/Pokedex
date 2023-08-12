import "./Button.css";

interface ButtonProps {
  children: string;
  arrayLength: number;
}

const Button: React.FC<ButtonProps> = ({
  children,
  arrayLength,
}: ButtonProps) => {
  return (
      <button
        type="button"
        className={`${
          arrayLength === 1 ? "main-button1" : "main-button2"
        } ${children.toLowerCase()}`}
      >
        {children}
      </button>
  );
};

export default Button;
