import '../styles/home.css';
import Code from '../assets/code.svg';


export const Navbar=()=>{
    return (
            <nav>
                <div className="wrapper">
                    <div className="logo">
                        <img src={Code} alt="code icon" />
                        <p>Kaushik.S</p>
                    </div>
                    <div className="links">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}