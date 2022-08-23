import SignInForm from '../../components/SignInForm/SignInForm'
import './SignIn.scss'
import NavBar from '../../components/NavBar/NavBar'




const SignIn = () => {
    return (
        <div className="signinform-container">
            {/* <NavBar/> */}
            <img src='../../../public/assets/SignInImage.png' alt="pic" />
            <SignInForm />
        </div>
    )
};

export default SignIn