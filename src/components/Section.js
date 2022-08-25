import React from 'react';
import style from '../index.module.css';
import Card from './Card.js';
export default function Section({courses}) {
  return (
    <section className={style.courses} style={{margin:"20px"}}>
    <h3>Expand your career opportunities with Python</h3>
    <p>
      Take one of Udemy's range of Python courses and learn how to code
      using this incredibly useful language. Its simple syntax and
      readability makes Python perfect for Flask, Django , data science, and
      machine learning. You'll learn how to build everything from games to
      sites to apps. Choose from a range of courses that will appeal to..
    </p>
    <button className={style.exploreBtn} id="explore-btn" ><b>Explore Python</b></button>
    <div id="display-courses" className={style.displayCourses}>
      {courses.map((course) => <Card key={course.id} course={course} />)}
    </div>
  </section>
  )
}
