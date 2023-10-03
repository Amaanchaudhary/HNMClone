import './Register.css'

const Register = () => {
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
                        <div id='mainline'>
                            Email <div id='star'>*</div>
                        </div>
                        <div id='in1'><input type="text" /></div>
                        <div id='pass'>Create a password <div id='star2' >*</div></div>
                        <div id='in1'><input type="text" /> <div id='show'>SHOW</div></div>
                        <div id='uplow'><p>8 characters 1 lowercase1 uppercase1 number</p></div>
                        <div id='dob'>Date of birth <div id='star3'>*</div></div>
                        <div id='in1'><input type="" /></div>
                        <div id='uplow2'><p>H&M wants to give you a special treat on your birthday</p></div>
                        <div id='option'> <select id='op1'><option id='op1'>ADD MORE & GET MORE</option></select> </div>
                        <div id='yes'>
                            <div id='yes1'><input type="checkbox" name="" id="checkbox" /></div>
                            <div id='yes2'> <span>Yes, email me offers, style updates, and special invites to sales and events.</span> <br />
                                <span>Wish your inbox was more stylish? No problem, just subscribe to <br /> our newsletter. Find out what's hot and happening in the world of fashion, beauty, and home decor. Plus, you'll get bonus vouchers, birthday offers, and special invites to sales and events – straight <br /> to your inbox!</span></div> </div>
                        <div id='byc'>By clicking ‘Become a member’, I agree to the H&M Membership <br /><span id='byc1'>Terms and conditions.</span></div>
                        <div id='lasttext'>To give you the full membership experience, we will process your personal data in <br /> accordance with the H&M's <span id='byc1'>Privacy Notice.</span></div>
                        <div id='bm'><button id='bm1'>Become a member</button></div>
                        <div id='signin'><button id='sn2'>Sign in</button></div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Register 