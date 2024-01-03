import logo from "../assets/logo.png";

const Header = () => {
    return (
        <div id="header">
            <img src={logo} alt="" />
            <h1>Investment Calculator</h1>
        </div>
    );
};

export default Header;
