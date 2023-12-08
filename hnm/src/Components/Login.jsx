import { useContext, useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import api from '../helpers/axios.config';

const Login = () => {

    const [data, setData] = useState({ email: '', password: '' });
    const { Login } = useContext(AuthContext)

    const rout = useNavigate();
    console.log(data, 'data')

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (data.email && data.password) {
            if (data.password >= 8) {
                try {
                    // console.log("hii")
                    const response = await api.post('auth/login', { data })
                    if (response.data.success) {
                        localStorage.setItem('My-token', JSON.stringify(response.data.token))
                        Login(response.data.user)
                        console.log(response.data.user, "user")
                        toast.success(response.data.message);
                        setData({ email: '', password: '' })
                        rout("/");
                    } else {
                        throw new Error("Something went wrong");
                    }
                } catch (error) {
                    toast.error(error?.response.data.message);
                    console.log(error, "error hai")
                }
            } else {
                toast.error("Password must be 8 digit")
            }
        } else {
            toast.error("All fields are mandatory!")
        }
    }
    return (
        <div id='screen'>
            <div id='body' >
                <div id='semi-body' >
                    <div className='top'>
                        <h1>Sign in</h1>
                        <i class="fa-solid fa-xmark fa-2xl"></i>
                    </div>
                    <p className='top-p' >Become a member — don’t miss out on deals, offers,
                        discounts and bonus vouchers.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div id='fieldset'>
                            <label>Email <span>*</span></label> <br />
                            <input type='text' name='email' onChange={handleChange} value={data.email} /><br /><br />
                            <label>Password <span>*</span></label> <br />
                            <input type='password' placeholder='SHOW' onChange={handleChange} name='password' value={data.password} /><br />
                            <div id='forgotPass'>
                                <div>
                                    <input className='checkbox' type='checkbox' />
                                    <p>Remember me</p>
                                </div>
                                <p><u>Forgot password?</u></p>
                            </div>
                        </div>

                        <input className='sign-in' type='submit' value='Sign in' onChange={handleSubmit} /><br />
                        <button className='sign-up' onClick={() => rout("/register")} >Become a member</button>
                        <p className='login-last'><u>Membership info</u></p>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default Login