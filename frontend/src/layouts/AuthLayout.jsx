import React from 'react';

function AuthLayout({children}) {
  return (
    <div className='bg-slate-900 text-white'>
      {children}
    </div>
  )
}

export default AuthLayout