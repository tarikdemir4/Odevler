import React from 'react'
import CategoryItem from './CategoryItem'
import "./App.css"

export default function Categories(props) {
  return (
    <div>{" "}
    <CategoryItem category={props.categories}/>
    </div>
  )
}
