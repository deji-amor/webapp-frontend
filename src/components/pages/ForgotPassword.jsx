import ForgotPasswordEmail from '../organisms/Password/forgotPasswordEmailInput'
import { ForgotEmailPageWrapper } from '../atoms/Password/wrappers'

const ForgotPassword = () => {

  return (
    <ForgotEmailPageWrapper>
      <ForgotPasswordEmail />
    </ForgotEmailPageWrapper>
  )
}

export default ForgotPassword