
interface ButtonProps {
  className?: string;
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ buttonText, className, onClick }: ButtonProps) {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
}

export default Button;




