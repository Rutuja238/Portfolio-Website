import "./Navbar.css";
function Navbar () {
    return (
        <nav>
            <ul>
            <li className="logo"><a href="#home">MyLogo</a></li>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="work">Work</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;