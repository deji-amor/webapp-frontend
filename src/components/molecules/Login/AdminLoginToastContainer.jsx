import React, {useState} from 'react'
import Toasts from '../../atoms/Login/Toasts'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { loginAdminActions } from '../../../state-manager/reducers/login/loginAdmin'

const AdminLoginToastContainer = props => {
  const toasts = useSelector(state => state.loginAdmin.toasts)
  const dispatch = useDispatch()
  
  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toasts
          key={toast.id}
          message={toast.message}
          title={toast.title}
          onClose={() => dispatch(loginAdminActions.hideToast(toast.id))}
        />
      ))}
    </div>
  )
}

AdminLoginToastContainer.propTypes = {}

export default AdminLoginToastContainer