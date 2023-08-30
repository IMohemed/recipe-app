import {Link} from "react-router-dom";
import { useCookies } from "react-cookie";
import{useNavigate} from "react-router-dom";

export const Navbar = () => {
    const[cookies,setCookies] = useCookies(["access_log"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_log", "");
        window.localStorage.removeItem("userID");
        navigate("/auth");
    };
    return(
        <div className="navbar">
            <Link to = "/">Home </Link>
            <Link to = "/createRecipe">createrecipe </Link>
            <Link to = "/savedRecipe">savedrecipe </Link>
            {!cookies.access_log?(
                <Link to = "/auth">Register/Login</Link>
            ):(<button onClick={logout}>Logout</button>)}
        </div>
    );
};