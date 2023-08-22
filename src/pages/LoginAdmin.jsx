import Wrapper from '../components/atoms/Login/Wrapper'
import AdminFormComponent from '../components/molecules/Login/AdminFormComponent'
import AdminLoginToastContainer from '../components/molecules/Login/AdminLoginToastContainer'
import Logo from '../components/atoms/Login/Logo'

const LoginAdmin = () => {
  return (
    <div className='min-h-screen h-screen'>
      <AdminLoginToastContainer/>
      <div className="px-[3rem] py-[0.5rem] mb-[1.5rem]">
        <Logo/>
      </div>
      <Wrapper>
        <AdminFormComponent/>
      </Wrapper>
    </div>
  )
}

export default LoginAdmin