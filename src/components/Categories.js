import React from 'react'
import Category from './Category'
import { useSelector } from 'react-redux'

export default function Categories() {
    const categories = useSelector(state => state)
    
    return (
        <div className='p-3 mt-4 bg-white movies-section'>
            {/* render movies  */}

            <h5>Movies Data</h5>{
                categories.length > 0 ?
                 (categories.map((category) => (
                   <Category category={category} />
                ))) : null
            }

            {/* render movies  */}

        </div>
    )
}
