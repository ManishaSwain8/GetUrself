import React from "react"

import "./Button.css"

import SyncLoader from "react-spinners/SyncLoader"

const LoadingSpinnerButton = ({ title, loading, onClick }) => {
  //this function creates a button
  return (
    <button onClick={onClick} className="loading-spinner-button">
      {loading ? <SyncLoader color="#c3c5f0" size={9} /> : title + " "}
    </button>
  )
}

export default LoadingSpinnerButton
