import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const rout = useNavigate();
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
                    <div id='fieldset'>
                        <label>Email <span>*</span></label> <br />
                        <input type='text' /><br /><br />
                        <label>Password <span>*</span></label> <br />
                        <input type='password' placeholder='SHOW' /><br />
                        <div id='forgotPass'>
                            <div>
                                <input className='checkbox' type='checkbox' />
                                <p>Remember me</p>
                            </div>
                            <p><u>Forgot password?</u></p>
                        </div>
                    </div>

                    <button className='sign-in' >Sign in</button><br/>
                    <button className='sign-up' onClick={() => rout("/register")} >Become a member</button>
                    <p className='last'><u>Membership info</u></p>
                </div>
            </div>

        </div>
    )
}
export default Login