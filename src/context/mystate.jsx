import React, { useState } from 'react'
import MyContext from './mycontext'


const Mystate = ({children}) => {
  

const [loading, setLoading] = useState(false)
  return (
    <MyContext.Provider value={{
        loading,
        setLoading
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default Mystate
