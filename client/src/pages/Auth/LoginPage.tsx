import StyledInput from "@shared/ui/StyledInput/StyledInput.tsx";
import {useState} from "react";
import StyledButton from "@shared/ui/StyledButton/StyledButton.tsx";
import {Link} from "react-router";

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-3xl'>Вход</h1>

            <form className='flex flex-col gap-5'>
                <StyledInput
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    labelText='Имя пользователя'
                />
                <StyledInput
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    labelText='Пароль'
                    type='password'
                />
                <StyledButton>Войти</StyledButton>
            </form>
            <Link
                className='hover:text-blue-400 duration-300 self-center text-sm'
                to='/auth/register'
            >
                Зарегистрироваться?
            </Link>
        </div>
    );
};

export default LoginPage;