import React from 'react';
import { Header, Footer } from '../components';

function PageLayout({children}) {
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-100'>
      <div className='w-full block'>
        <Header />
          <main>
            {children}
          </main>
        <Footer />
      </div>
    </div>
  )
}

export default PageLayout