import React from 'react'
import PropTypes from 'prop-types'
import { twMerge } from 'tailwind-merge'

const GenHR = ({className}) => {
  return (
    <div className={twMerge(`h-px bg-black ${className}`)}></div>
  )
}

GenHR.propTypes = {
  className: PropTypes.string
}

export default GenHR