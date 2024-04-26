import React from 'react'

const AlertMessage = ({success, message}) => {
  return (
    <>
    {
        success  ? (
            <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Success Message: </strong> {message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        ):(
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error Message: </strong> {message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        )
    }

    </>
  )
}

export default AlertMessage