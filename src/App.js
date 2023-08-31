import './App.css';
import Blogcard from './Components/Blogcard';
import Navbar from './Components/Navbar';

const blogs = [
  {title: "Why I'm teaching myself React", body: "This is my first blog post!"},
  {title: "My first week learning ReactJS", body: "This is my first blog post!"},
  {title: "I built a simple blog", body: "This is my first blog post!"},
  {title: "I enjoy coding as a way to feel calm", body: "This is my first blog post!"}
];

function App() {
  return (
   <main>
    <Navbar />
    { blogs.map((blog) =>  <Blogcard blog={blog} />) }
   </main>
  );
}

export default App;