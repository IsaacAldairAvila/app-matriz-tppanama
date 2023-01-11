import React from 'react'

const Container = ({children}) => {
  return (
    <div className='container'>
        {
            children 
            ? children
            : null
        }
    </div>
  )
}

export default Container