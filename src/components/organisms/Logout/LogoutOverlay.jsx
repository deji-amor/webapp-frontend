import React from 'react'
import PropTypes from 'prop-types'
import Modal from '../../molecules/Logout/Modal'
import Overlay from '../../atoms/Logout/Overlay'
import { useDispatch } from 'react-redux'
import { logoutActions } from '../../../state-manager/reducers/logout/logout'

const LogoutOverlay = props => {
  const dispatch = useDispatch()
  const handleHideLogoutModal = () => {
    dispatch(logoutActions.toggleLogoutModal())
  }

  return (
    <>
      <Modal/>
      <Overlay onClick={handleHideLogoutModal}/>
    </>
  )
}

LogoutOverlay.propTypes = {}

export default LogoutOverlay