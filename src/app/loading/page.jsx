import React from 'react'

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center gap-2">
        <Spinner color="warning" />
        <span className="text-xs text-muted">Warning</span>
      </div>
  )
}

export default LoadingPage