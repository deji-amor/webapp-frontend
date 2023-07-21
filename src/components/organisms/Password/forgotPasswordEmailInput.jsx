import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotpasswordemail } from "../../../state-manager/reducers/password/forgotpassword"
import { SET_EMAIL, REMOVE_EMAIL, SET_ERROR_FALSE } from "../../../state-manager/reducers/password/forgotpassword";
import { ForgotEmailWrapper } from "../../atoms/Password/wrappers"
import { useNavigate } from "react-router-dom";
import ErrorCard from "../../molecules/Password/customErrorCard";
import lockImage from "../../../assets/password/lock.png";
import HeaderContent from '../../molecules/Password/customHeaderSection';
import InputButton from '../../molecules/Password/customForgotPasswordInputSection';
import { validateEmail } from "../../atoms/Password/validators"

const ForgotPasswordEmail = () => {
  const [forgotPasswordError, setForgotPasswordError] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector(state => state.forgotPassword)

  // handles email input change
  const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setServerError(false)
  };

  // handles form submit for email
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!email) return
    
    try {
      dispatch(SET_EMAIL({email}));
      dispatch(forgotpasswordemail({email}));
    }catch (err) {
      console.log(err);
    }

    // if (error) return setServerError(true);
    if (!serverError && !forgotPasswordError ) return navigate('/forgot-password-success');
  }

  useEffect(() => {
      validateEmail(setForgotPasswordError, email);
      dispatch(SET_ERROR_FALSE(false))

  }, [email, dispatch]);

  return (
    <ForgotEmailWrapper>
      <ErrorCard align='left' error={serverError} titleSize="16px" 
                 size='14px' titleColor="#D73D3D" 
                 color='rgba(215, 61, 61, 0.50);' 
                 title="Email Not Found" 
                 description="The email you entered is not registered with us." />

      <HeaderContent 
        icon={<img src={lockImage} className="icon" />} 
        iconSize="38px"
        title="Forgot Password" 
        dPadding={true}
        description="Enter your email and we will send you a reset link" />

      <InputButton 
        type="email" 
        butText="Send me the link" 
        butType="button" 
        placeholder="Type your e-mail" 
        label="E-mail"
        defaultCursor={!email || forgotPasswordError || serverError}
        handleEmailChange={handleEmailChange}
        forgotPasswordError={forgotPasswordError} 
        errorMessage="Invalid email format"
        serverError={serverError}
        serverErrorMessage="Email not found"
        note="The recovery link will expire after 48 hrs, please use before then."
        handleFormSubmit={handleFormSubmit} />

    </ForgotEmailWrapper>
  )
}

export default ForgotPasswordEmail;