import React, { useState } from 'react'

function SearchBar( {searchInput,setSearchInput} ) {
    // const [input,SetInput] = useState('')
    // console.log(input)
  return (
    
         <div >
          <input 
            className='p-2 outline-none border-8 border-gray-400 w-full text-xl max-w-lg' 
            type="text" 
            placeholder='Search for products...' 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)} 
          />
        </div>
    
  )
}

export default SearchBar