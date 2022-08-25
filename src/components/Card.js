import React from 'react';
import ReactStars from 'react-rating-stars-component';
import style from '../index.module.css';
function Card(props) {
    const {image,title,headline,rating,price} = props.course;
    return (
        <div className={style.coursesContent}>
            <img src={image} alt="course Logo" width="100%" />
            <figcaption>
                <b> ${title} </b>
            </figcaption>
            <p style={{ fontSize: "12px" }}>{headline}</p>
            <div style={{ color: "darkorange",display:"flex",alignItems:"center" }}>
                <span style={{ fontSize: "20px", color: "rgb(248, 165, 23)" }}>{parseFloat(rating).toFixed(1)}
                </span>
                <ReactStars count={rating} size={24}color="#ffd700" edit={false}></ReactStars>
                <span style={{ color: "darkgray" }}>(56665)</span>
            </div>
            <div>
                <span> price :</span>
                <b id="course-price">${price}</b>
            </div>
        </div >
    );
}

export default Card;