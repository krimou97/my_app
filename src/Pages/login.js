import './home.css'
import loginimg from '../../src/assets/images/logo.png'

const Login = () => {

    const hello = () => {
        alert ('hello')
    }

    return (
        <div className="container">
        <div className="card">
            <div onClick={hello} className="logo">
                <img src={loginimg} alt="Logo"/>
            </div>
            <div className="inputs">
                <input className="text" type="text" placeholder="Email or mobile number"/>
                <input type="password" placeholder="Password"/>
                <div className="next">
                    <span>Next</span>
                </div>
                <div className="divider">
                    <div className="left"></div>
                    <span>or</span>
                    <div className="right"></div>
                </div>
                <div className="new">
                    <span>Sign Up</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;