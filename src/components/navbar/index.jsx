import './navbar.css';
import {useNavigate} from "react-router-dom";

export const Navbar = ()=>{

    const navigate = useNavigate();

    return(
        <>
        <div class="navbar">
            <h1 onClick={()=> navigate('/')} className='logo'>GoVerdana🌿</h1>
        <nav class="main flex gap-2">
            <span onClick={()=> navigate('/cart')} className="material-symbols-outlined">shopping_cart</span>
            <span onClick={()=> navigate('/wish')} className="material-symbols-outlined">favorite</span>
            <span className="material-symbols-outlined">account_circle</span>
        </nav>
        </div>
        </>
    );
}