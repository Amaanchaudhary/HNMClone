import './NavBar.css'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const rout = useNavigate();
  return (
    <div id='nav-screen'>

      <div className='nav-upper' >
        <div className='nav-up1' >
          <a>Customer Service</a>
          <a>Newsletter</a>
          <a>Find a store</a>
          <a>
            <span className='circle'></span>
            <span className='circle'></span>
            <span className='circle'></span>
          </a>
        </div>

        <div className='nav-up2' >
          <div>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
          </div>
        </div>

        <div className='nav-up3' >
          <div>
            <button onClick={() => rout("/login")} ><i class="fa-regular fa-user fa-xl"></i> Sign in</button>
            <button><i class="fa-regular fa-heart fa-2xl"></i> favourites</button>
            <button><i class="fa-solid fa-bag-shopping fa-2xl"></i> Shopping bag (0)</button>
          </div>
        </div>
      </div>

      <div className='nav-lower' >
        <div>
          <p>Ladies</p>
          <p>Men</p>
          <p>Divided</p>
          <p>Baby</p>
          <p>Kids</p>
          <p>H&M HOME</p>
          <p>Sport</p>
          <p>Sustainability</p>
          <p>Sale</p>
        </div>
        <div>
          <i><i class="fa-solid fa-magnifying-glass fa-lg"></i></i>
          <input type='input' placeholder='Search Products' />
        </div>
      </div>
    </div>
  )
}
export default NavBar