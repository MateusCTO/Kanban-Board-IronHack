import {Navlink} from 'react-router-dom';

function Navbar(){
    return(
        <nav>
            <Navlink to="/" >Home</Navlink>
            <Navlink to="/" >PlaceHolder</Navlink>
        </nav>
    )
}
export default Navbar;