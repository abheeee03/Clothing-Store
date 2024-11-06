import React from 'react'
import { AiOutlineLoading } from "react-icons/ai";
import Style from './LoadingSpinner.module.css'

const LoadingSpinner = () => {
  return (
    <div className={Style.loadingSpinner}>
        <AiOutlineLoading />
    </div>
  )
}

export default LoadingSpinner