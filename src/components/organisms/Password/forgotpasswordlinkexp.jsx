import { ForgotEmailWrapper as PasswordExpireWrapper } from "../../atoms/Password/wrappers"
import { useNavigate } from "react-router-dom";
import PasswordSuccess from "../../molecules/Password/customPasswordEmailSuccess"
import CustomButton from "../../atoms/Password/customButton"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


const PasswordExpired = () => {
  const navigate = useNavigate();

  const navigateToLoginAdmin = (e) => {
    e.preventDefault()
    navigate("/forgot-password")
  }

  return (
    <PasswordExpireWrapper width="550px">
      
      <PasswordSuccess
        icon={<ErrorOutlineIcon className="icon" />} 
        title="Oops! Password Recovery Link Has Expired." 
        iconSize="56px" 
        description="No worries, you can request another one." 
        padding={true} 
        titleSize="32px" 
        size="18px" 
        iconColor="#D73D3D"
        desWidth="100%" 
        color="#828282" />

      <CustomButton 
        butText="Resend Link" 
        butWidth="80%" 
        onClick={navigateToLoginAdmin} />

    </PasswordExpireWrapper>
  )
}

export default PasswordExpired