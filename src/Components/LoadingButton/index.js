import React from 'react'

function LoadingButton(props) {
    const {isLoading, label, handleClick} = props
    return (
        <button className="btn btn-primary" type="button" disabled={isLoading} onClick={handleClick}> 
            <span className={isLoading ? "spinner-border spinner-border-sm": ""} role="status" aria-hidden="true"></span>
            <span className="sr-only"></span>
            {
                isLoading ? "Loading..." : label
            }
        </button>
    );
  }

export default LoadingButton;