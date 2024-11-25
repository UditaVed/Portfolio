import Image from "next/image";
import Navbar from "./components/Navbar";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
export default function Home() {
  return (
   <div className="font-outfit">
    <Navbar/>
    <div className="mt-5"><About/></div>
    <div className="mt-11"><Experience/></div>
    <div className="mt-11"><Projects/></div>
   </div>
  );
}
