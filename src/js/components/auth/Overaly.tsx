require('../../../style/SignUpAndLoginPage/overlay.scss');
interface SignUpProps {
    switchView: () => void;
  } 

export default function SignUp(props: SignUpProps){
    return (
        <div className="overlay-container">
            <div className="overlay">
                <div className="overlay-panel overlay-left">
                    <h1 className="sub-header">Welcome Back!</h1>
                    <p className="hook-statement">To keep connected with us please login with your personal info</p>
                    <button className="ghost main-button" onClick={props.switchView}>Sign In</button>
                </div>
                <div className="overlay-panel overlay-right">
                    <h1 className="sub-header">Hello, Friend!</h1>
                    <p className="hook-statement">Enter your personal details and start journey with us</p>
                    <button className="ghost main-button" onClick={props.switchView}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
