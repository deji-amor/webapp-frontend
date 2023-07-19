import { useSelector, useDispatch } from "react-redux"
import { forgotpasswordemail } from "../../../state-manager/reducers/password/forgotpassword"
import { SET_EMAIL, REMOVE_EMAIL, SET_ERROR_FALSE } from "../../../state-manager/reducers/password/forgotpassword";
import { ForgotEmailWrapper as ForgotEmailSuccessWrapper } from "../../atoms/Password/wrappers"
import PasswordSuccess from "../../molecules/Password/customPasswordEmailSuccess"
import CustomButton from "../../atoms/Password/customButton"
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const ForgotEmailSuccess = () => {
  const { email } = useSelector(state => state.forgotpassword);
  const dispatch = useDispatch();
  
  const handleResubmit = (e) => {
    e.preventDefault()

    try {
      // dispatch(forgotpasswordemail(email))
      console.log(email.email)
    }catch (err) {
      console.log(err)
    }
  }

  return (
    <ForgotEmailSuccessWrapper width="550px">
      
      <PasswordSuccess 
        icon={<MailOutlineIcon className="icon" />} 
        title="Password recovery Email has been sent to your Inbox." 
        iconSize="56px" 
        padding={true} 
        description="Note: The recovery link will expire after 48 hrs, please use before then." 
        titleSize="32px" 
        size="12px" 
        desWidth="80%" 
        color="#828282" />

      <p style={{textAlign: 'center', fontSize: '18px', marginBottom: '-20px'}}>Didn’t receive an email?</p>

      <CustomButton  
        butText="Resend Link" 
        butWidth="70%" 
        onClick={handleResubmit} />

    </ForgotEmailSuccessWrapper>
  )
}

export default ForgotEmailSuccess