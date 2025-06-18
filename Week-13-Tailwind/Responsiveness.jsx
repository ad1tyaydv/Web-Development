import { useState } from 'react'

function App() {

  return (
    <div className='grid grid-cols-12'>
        <div className='bg-blue-300 col-span-4'>
          Hii there!!
        </div>
        <div className='bg-red-300 col-span-6'>
          Hii there!!
        </div>
        <div className='bg-green-300 col-span-2'>
          Hii there!!
        </div>
    </div>
  );
}

export default App
