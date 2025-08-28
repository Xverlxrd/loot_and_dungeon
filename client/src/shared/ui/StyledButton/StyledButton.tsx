import type {FC} from "react";

interface StyledButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: HTMLButtonElement['type'];
  disabled?: boolean;
  className?: string;
}

const StyledButton:FC<StyledButtonProps> = ({children, onClick, type='button', disabled=false, className}) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={disabled}
            className={`px-6 py-3 bg-transparent border-2 border-blue-500 text-blue-400 
              hover:bg-blue-500 hover:text-white transition-all duration-300
              rounded-lg font-medium shadow-lg hover:shadow-blue-500/30 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default StyledButton;