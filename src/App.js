import './App.css';
import Blogcard from './Components/Blogcard';

const blogs = [
  {title: "Why I'm teaching myself React", body: "React is a popular language for front-end development. I'm learning it to become a better developer and designer."},
  {title: "Why I'm teaching myself React", body: "React is a popular language for front-end development. I'm learning it to become a better developer and designer."},
  {title: "My first week learning ReactJS", body: "So far I've learned about components, props, and JSX. I'm excited to learn more!"},
  {title: "I built a simple blog", body: "I built this blog using ReactJS. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
  {title: "Taking the Javacript Udemy course", body: "I've been taking a Udemy course on Javascript. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
  {title: "I enjoy coding as a way to feel calm", body: "Coding brings me a sense of calm and peace. I'm excited to continue learning!"},
];




function App() {
  return (
   <main>
    { blogs.map((blog) =>  <Blogcard blog={blog} />) }
   </main>
  );
}

export default App;