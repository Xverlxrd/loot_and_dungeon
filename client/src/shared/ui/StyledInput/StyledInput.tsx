import type {FC, HTMLInputTypeAttribute} from "react";

interface StyledInputProps {
    labelText?: string;
    value?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: HTMLInputTypeAttribute;
    className?: string;
    id?: string;
    placeholder?: string;
}

const StyledInput: FC<StyledInputProps> = (
    {
        type,
        value,
        onChange,
        labelText,
        id,
        className,
        placeholder,
        ...props
    }) => {

    return (
        <div className='w-full flex flex-col gap-1'>
            {labelText && <label htmlFor={id} className='text-sm font-medium'>{labelText}</label>}
            <input
                {...props}
                placeholder={placeholder}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className={`${className} px-4 py-2 border border-gray-300 
                           rounded-md focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent`}

            />
        </div>
    );
};

export default StyledInput;