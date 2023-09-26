import { useNavigate } from "react-router-dom";

const HomePage = () =>{
    const Rout = useNavigate();

    return(
        <div>
            <h1>HomePage</h1>
            <button onClick={() => Rout("/mens")} >Go to Mens Page</button>
            <button onClick={() => Rout("/login")} >Go to Login Page</button>
            <button onClick={() => Rout("/register")} >Go to Register Page</button>
            <button onClick={() => Rout("/footer")} >Go to Footer Page</button>
            <button onClick={() => Rout("/navbar")} >Go to NavBar Page</button>
        </div>
    )
}

export default HomePage;