import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <div className="navbar">
            <Link to = "/">Home </Link>
            <Link to = "/createRecipe">createrecipe </Link>
            <Link to = "/savedRecipe">savedrecipe </Link>
            <Link to = "/auth">Register/Login</Link>
        </div>
    );
};