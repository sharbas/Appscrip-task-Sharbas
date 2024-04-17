"use client"
import React,{useState} from 'react'
import { GoHeart } from 'react-icons/go'
import { HiMiniHeart } from 'react-icons/hi2'
import "../styles/ProductCard.css"
function ProductCard(props) {
    let [liked,setLiked]=useState(false)
    const HandleLike=()=>{
        setLiked(!liked)
    }
  return (
    <div className="product-card">
    <div className="product-image">
      <img src={props.data.image} alt="" className="product-image__img" />
    </div>
    <div className="product-details">
      <p className="product-title">
        {props.data.title.slice(0,15)}
      </p>
      <p className="pricing-info">
        <span className="underline">Sign in</span> or Create an account to
        see pricing
      </p>
      {liked ? (
        <HiMiniHeart onClick={HandleLike} className="heart-icon" />
      ) : (
        <GoHeart onClick={HandleLike} className="heart-icon" />
      )}
    </div>
  </div>
  
  )
}

export default ProductCard
