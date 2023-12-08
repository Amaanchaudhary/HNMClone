import toast from 'react-hot-toast';
import './Register.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../helpers/axios.config';

const Register = () => {

    const [data, setData] = useState({ name: '', email: "", password: '' })
    const rout = useNavigate();
    console.log(data, "data")

    function handleChange(event) {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (data.name, data.email, data.password) {
            if (data.password.length >= 8) {
                try {
                    const response = await api.post("/auth/register", { data })

                    if (response.data.success) {
                        toast.success(response.data.message)
                        setData({ name: '', email: "", password: '' })
                        rout("/")
                    } else {
                        throw new Error("Something went wrong");
                    }
                }
                catch (error) {
                    toast.error(error?.response.data.message);
                    console.log(error, 'error hai')
                }
            }
            else {
                toast.error("Password must be 8 digit")
            }
        } else {
            toast.error("All fields are mandatory!")
        }
    }
    return (
        <div id='screen'>
            <div id='mainscreen'>
                <div id='inscreen'>
                    <div id='firstline'>
                        <h2>BECOME A MEMBER</h2>
                        <div id='cross'><i class="fa-solid fa-xmark fa-xl"></i></div>
                        <div id='secline'><p>Become a member — don’t miss out on deals, offers, discounts and <br />bonus vouchers.</p></div>
                    </div>
                    <div id='downline'>
                        <form onSubmit={handleSubmit}>
                            <div id='mainline'>
                                Email <div id='star'>*</div>
                            </div>
                            <div id='in1'><input type="text" name='email' onChange={handleChange} value={data.email} /></div>
                            <div id='pass'>Create a password <div id='star2' >*</div></div>
                            <div id='in1'><input type="password" name='password' onChange={handleChange} value={data.password} /> <div id='show'>SHOW</div></div>
                            <div id='uplow'><p>8 characters 1 lowercase1 uppercase1 number</p></div>
                            <div id='dob'>Name <div id='star3'>*</div></div>
                            <div id='in1'><input type="text" name='name' onChange={handleChange} value={data.name} /></div>
                            <div id='uplow2'><p>Enter your name</p></div>
                            <div id='option'> <select id='op1'><option id='op1'>ADD MORE & GET MORE</option></select> </div>
                            <div id='yes'>
                                <div id='yes1'><input type="checkbox" name="" id="checkbox" /></div>
                                <div id='yes2'> <span>Yes, email me offers, style updates, and special invites to sales and events.</span> <br />
                                    <span>Wish your inbox was more stylish? No problem, just subscribe to <br /> our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight <br /> to your inbox!</span></div> </div>
                            <div id='byc'>By clicking ‘Become a member’, I agree to the H&M Membership <br /><span id='byc1'>Terms and conditions.</span></div>
                            <div id='lasttext'>To give you the full membership experience, we will process your personal data in <br /> accordance with the H&M's <span id='byc1'>Privacy Notice.</span></div>
                            <div id='bm'><button id='bm1'>Become a member</button></div>
                            <div id='signin'><input id='sn2' type='submit' value='Register' /></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register 