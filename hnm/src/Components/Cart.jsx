import './Cart.css';

const Cart = () => {
    return (
        <div id='hnm-screen' >
            <p className='hnm-Header'>HM.com / <span>Shopping bag</span></p>
            <div className='hnm-top-div'>
                <p>Members get free shipping above Rs.1999</p>
                <p>Free & flexible 15 days return</p>
                <p>Estimated delivery time: 2-7 days</p>
            </div>
            <h1 className='hnm-top-h1'>Shopping bag</h1>
            <div className='hnm-body'>
                <div className='hnm-left'>

                    <div className='hnm-cart-product'>
                        <div className='hnm-cart-product-image'>
                            <img src='https://lp2.hm.com/hmgoepprod?set=source[/ba/75/ba75709f8b00ed2fb7990d1eac67f7fd977bb07d.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]' />
                        </div>
                        <div className='hnm-cart-product-details'>
                            <div className='hnm-product-name'>
                                <p>Loose Fit T-shirt <br /><span>Rs. 799.00</span></p>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                            <div className='hnm-product-info'>
                                <div>
                                    <span>Art.no.<br />Colour:</span>
                                </div>
                                <div>
                                    <span>1198328005<br />Dark brown/Forest</span>
                                </div>
                                <div>
                                    <span>Size:<br />Total:</span>
                                </div>
                                <div><span>L<br />Rs.799.00</span></div>
                            </div>
                            <div className='hnm-cart-product-last'>
                                <button className='hnm-heart-but'><i class="fa-regular fa-heart fa-lg"></i></button>
                                <button className='hnm-quantity-but'>
                                    <p>1</p>
                                    <i class="fa-solid fa-angle-down fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='hnm-cart-product'>
                        <div className='hnm-cart-product-image'>
                            <img src='https://lp2.hm.com/hmgoepprod?set=source[/46/a3/46a3eea2d9c78e05cb3370b745182e9f576e2bc0.jpg],origin[dam],category[men_tshirtstanks_longsleeve],type[DESCRIPTIVESTILLLIFE],res[q],hmver[2]&call=url[file:/product/miniature]' />
                        </div>
                        <div className='hnm-cart-product-details'>
                            <div className='hnm-product-name'>
                                <p>Relaxed Fit Jersey top <br /><span>Rs. 1499.00</span></p>
                                <i class="fa-solid fa-trash"></i>
                            </div>
                            <div className='hnm-product-info'>
                                <div>
                                    <span>Art.no.<br />Colour:</span>
                                </div>
                                <div>
                                    <span>1198328005<br />Dark brown/Forest</span>
                                </div>
                                <div>
                                    <span>Size:<br />Total:</span>
                                </div>
                                <div><span>L<br />Rs.1499.00</span></div>
                            </div>
                            <div className='hnm-cart-product-last'>
                                <button className='hnm-heart-but'><i class="fa-regular fa-heart fa-lg"></i></button>
                                <button className='hnm-quantity-but'>
                                    <p>1</p>
                                    <i class="fa-solid fa-angle-down fa-lg"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hnm-right'>
                    <div className='hnm-right-top'>
                        <span className='hnm-right-top-grey'>Discounts</span>
                        <span><u>Apply discount</u></span>
                    </div>
                    <p className='hnm-right-p'>Log in to use your personal offers!</p>
                    <button className='hnm-login'>Log in</button>
                    <h1 className='hnm-right-line'></h1>
                    <div className='hnm-orderval'>
                        <span className='hnm-span-grey'>Order value</span>
                        <span>Rs.2,298.00</span>
                    </div>
                    <div className='hnm-orderval'>
                        <span className='hnm-span-grey'>Delivery</span>
                        <span>FREE</span>
                    </div>
                    <h1 style={{ marginTop: '20px', paddingBottom: '5px' }} className='hnm-right-line'></h1>
                    <div className='hnm-Total'>
                        <span>Total</span>
                        <span>Rs.2,298.00</span>
                    </div>
                    <button className='hnm-right-continue'>Continue to checkout</button>
                    <p className='hnm-we-accept'>We accept</p>
                    <div className='hnm-cod'>
                        <p>cash on delivery</p>
                        <i class="fa-brands fa-cc-mastercard fa-xl"></i>
                        <i class="fa-brands fa-cc-visa fa-xl"></i>
                    </div>
                    <div style={{ width: '45%' }} className='hnm-cod'>
                        <p>EMI</p>
                        <i class="fa-brands fa-cc-paypal fa-xl"></i>
                        <i class="fa-brands fa-cc-amazon-pay fa-xl"></i>
                        <i class="fa-brands fa-cc-discover fa-xl"></i>
                    </div>
                    <div className='hnm-right-last'>
                        <p>Prices and delivery costs are not confirmed until you've reached the checkout.</p>
                        <p>15 days free returns. Read more about return and refund policy.</p>
                        <p>Customers would receive an SMS/WhatsApp notifications regarding deliveries on the registered phone number</p>
                    </div>
                    <div className='hnm-cut-div'></div>
                    <div className='hnm-member-benfit'>
                        <h3>MEMBER BENEFITS</h3>
                        <p>Become a member to receive fantastic offers!</p>
                        <p>You can apply discount codes in the checkout process</p>
                        <p>There are many membership benefits.</p>
                        <p>You will get prompted to become a member if you're not already a member and you have a member priced item in your shopping bag</p>
                    </div>
                    <div className='hnm-cut-div'></div>
                    <div className='hnm-last-div-right'>
                        <p><i class="fa-solid fa-cube fa-xl"></i>Delivery and return options</p>
                        <i class="fa-solid fa-chevron-right fa-lg"></i>
                    </div>
                    <div style={{height:'78px'}} className='hnm-cut-div'></div>
                </div>
            </div>
        </div>
    )
}

export default Cart;