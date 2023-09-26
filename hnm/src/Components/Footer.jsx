import './Footer.css'

const Footer = () => {
    return (
        <>
            <div id="footer">
                <div id='SemiFooter'>
                    <div>
                        <h5>SHOP</h5>
                        <p>Ladies</p>
                        <p>Mens</p>
                        <p>Baby</p>
                        <p>Kids</p>
                        <p>H&M HOME</p>
                        <p>Sport</p>
                    </div>
                    <div>
                        <h5>CORPORATE INFO</h5>
                        <p>Career at H&M</p>
                        <p>About H&M group</p>
                        <p>Sustainability H&M Group</p>
                        <p>Press</p>
                        <p>Investor relations</p>
                        <p>Corporate governance</p>
                    </div>
                    <div>
                        <h5>HELP</h5>
                        <p>Customer Service</p>
                        <p>My H&M</p>
                        <p>Find a store</p>
                        <p>Legal & Privacy</p>
                        <p>Contact</p>
                        <p>Report a scam</p>
                        <p>Cookie Notice</p>
                        <p style={{ fontSize: '12px' }} >Cookie Settings</p>
                    </div>
                    <div>
                        <h6>
                            Sign up now and be the first to know about exclusive offers,
                            latest fashion news & style tips!
                        </h6>
                        <span>Read more<i class="fa-solid fa-arrow-right"></i></span>
                    </div>
                </div>

                <div id='logos'>
                    <i class="fa-brands fa-square-facebook fa-lg"></i>
                    <i class="fa-brands fa-twitter fa-lg"></i>
                    <i class="fa-brands fa-instagram fa-lg"></i>
                    <i class="fa-brands fa-youtube fa-lg"></i>
                    <i class="fa-brands fa-pinterest fa-lg"></i>
                </div>

                <p className='Oneline' >
                    The content of this site is copyright-protected and is the
                    property of H & M Hennes & Mauritz AB.
                </p>

                <div className='image' >
                    <img src='data:image/png;base64,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'/>
                </div>

                <p className='India' >INDIA | Rs.</p>
            </div>
        </>
    )
}
export default Footer;