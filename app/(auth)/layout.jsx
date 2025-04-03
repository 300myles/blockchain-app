import ProtectedAuthRoute from '@/context/AuthProvider'
import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <ProtectedAuthRoute>
      {children}
    </ProtectedAuthRoute>
  )
}

export default AuthLayout
