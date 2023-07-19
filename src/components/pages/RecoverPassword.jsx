import ForgotPasswordRecover from '../organisms/Password/forgotPasswordRecovery'
import { ForgotEmailPageWrapper as ForgotPasswordRecoverWrapper } from '../atoms/Password/wrappers'


const RecoverPassword = () => {
  return (
    <ForgotPasswordRecoverWrapper>
      <ForgotPasswordRecover />
    </ForgotPasswordRecoverWrapper>
  )
}

export default RecoverPassword