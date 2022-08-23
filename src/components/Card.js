import React from 'react';
import ReactStars from 'react-rating-stars-component';
import '../index.css';
function Card(props) {
    return (
        <div className="courses-content">
            <img src={props.course.image} alt="course Logo" width="100%" />
            <figcaption>
                <b> ${props.course.title} </b>
            </figcaption>
            <p style={{ fontSize: "12px" }}>{props.course.headline}</p>
            <div style={{ color: "darkorange" }}>
                <span style={{ fontSize: "20px", color: "rgb(248, 165, 23)" }}>${parseFloat(props.course.rating).toFixed(1)}</span>
                <span style={{ color: "darkgray" }}>(56665)</span>
            </div>
            <div>
                <span> price :</span>
                <ReactStars count={props.course.rating} size={24}
                    activeColor="#ffd700" edit={false}></ReactStars>
                <b id="course-price">${props.course.price}</b>
            </div>
        </div >
    );
}

export default Card;