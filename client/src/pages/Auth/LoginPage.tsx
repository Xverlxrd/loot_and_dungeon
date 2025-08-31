import StyledInput from "@shared/ui/StyledInput/StyledInput.tsx";
import StyledButton from "@shared/ui/StyledButton/StyledButton.tsx";
import {Link, useNavigate} from "react-router";
import type {loginRequestData} from "@shared/types/auth.types.ts";
import {type SubmitHandler, useForm} from "react-hook-form";
import {authService} from "@shared/api/authService.ts";

const LoginPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<loginRequestData>()
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<loginRequestData> = async(data) => {
        const token = await authService.login(data)
        if(token) {
            localStorage.setItem('access_token', token.access_token)
            localStorage.setItem('refresh_token', token.refresh_token)
        }

        navigate('/')
    }

    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-3xl'>Вход</h1>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>
                <StyledInput
                    className={`${errors.username && 'border-red-500 focus:ring-red-500'}`}
                    {...register('username', { required: true})}
                    id='username'
                    labelText='Имя пользователя'
                />
                {errors.username && (
                    <span className='font-bold text-red-500'>Username is required</span>)
                }

                <StyledInput
                    className={`${errors.password && 'border-red-500 focus:ring-red-500'}`}
                    {...register('password', { required: true})}
                    id='password'
                    labelText='Пароль'
                    type='password'
                />
                {errors.password && (
                    <span className='font-bold text-red-500'>Password is required</span>
                )}
                <StyledButton type='submit'>Войти</StyledButton>
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