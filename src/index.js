import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card.js';
import courses from './courses.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className='courses' style={{margin:"20px"}}>
    <h3>Expand your career opportunities with Python</h3>
    <p>
      Take one of Udemy's range of Python courses and learn how to code
      using this incredibly useful language. Its simple syntax and
      readability makes Python perfect for Flask, Django , data science, and
      machine learning. You'll learn how to build everything from games to
      sites to apps. Choose from a range of courses that will appeal to..
    </p>
    <button id="explore-btn" style={{ width: "150px" }}><b>Explore Python</b></button>
    <div id="display-courses">
      {courses.map((course) => <Card id={course.id} course={course} />)}
    </div>
  </section>
);

