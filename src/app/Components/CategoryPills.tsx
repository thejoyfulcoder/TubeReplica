import React from 'react'
import { Button } from './Button'
import "../styles/CategoryPills.css"
type CategoryPillsType={
    categories: string[],
    selectedCategory:string,
    setSelectedCategory: (selectedCategory:string) => void
}

function CategoryPills({categories,selectedCategory,setSelectedCategory }:CategoryPillsType) {

  return (
   <div  className='pills-container sticky bg-black top-0 flex gap-3 p-2 overflow-y-auto no-scrollbar'>
     {
        categories.map((e)=>{
            return <Button onClick={()=>{setSelectedCategory(e)}} intent={selectedCategory === e ? "focused" :"default"} size={'default'} className={'text-xs flex-shrink-0 h-8 '}>{e}</Button>
        })
     }
   </div>
  )
}

export default CategoryPills