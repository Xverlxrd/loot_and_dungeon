import StyledInput from "@shared/ui/StyledInput/StyledInput.tsx";
import {useState} from "react";
import StyledButton from "@shared/ui/StyledButton/StyledButton.tsx";
import {Link} from "react-router";
import {authService} from "@shared/api/authService.ts";

/** TODO:
 * 1. Сделать логин
 * 2. Настроить аксиос инстанс для сохранения токена
 * 3. Выбрать куки или локал сторадж
 * 4. Удалть стейты и сделать нормальную работу с формой
 */

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async () => {
       const token =  await authService.login({username, password})
    };

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-3xl'>Вход</h1>

            <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
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
                <StyledButton onClick={handleSubmit}>Войти</StyledButton>
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