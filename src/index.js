import ReactDOM from 'react-dom/client';
import Section from './components/Section.js';
import courses from './courses.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Section courses={courses}></Section>
);

