import {Outlet} from "react-router";

const AuthLayout = () => {
    return (
        <div className='w-full h-full bg-black flex justify-center items-center'>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;