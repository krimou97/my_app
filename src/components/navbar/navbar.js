import './navbar.css'
import {IoCallOutline, FiTruck} from "react-icons/all";

const Navbar = () => {
    return (
        <div className={'navbar-main'}>
            <div className={'navbar-left'}></div>
            <div className={'navbar-content'}>
                <div className={'navbar-left-items'}>
                    <div className={'first-item'}>
                        <IoCallOutline/>
                        <span>Call us on: 01 30 95 56 10.</span>
                    </div>
                    <div className={'second-item'}>
                        <FiTruck/>
                        <span>Free delivery to pick-up points from € 59 *</span>
                    </div>
                </div>
                <div className={'navbar-right-items'}>
                    <span className={'Blog'}>Blog</span>
                    <span className={'Contact-US'}>Contact Us</span>
                    <span className={'Log-in'}>Log In</span>
                </div>
            </div>
            <div className={'navbar-right'}></div>
        </div>
    )
}

export default Navbar