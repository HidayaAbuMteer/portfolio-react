import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import AllProject from "./components/AllProject";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="overflow-y-scroll h-screen scroll-snap-y scroll-snap-mandatory">
    <Header/>
    <Home/>
    <About/>
    <Courses/>
    <AllProject/>
    <Contact/>
    </div>
  );
}