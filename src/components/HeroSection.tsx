import NavBar from "./NavBar";
import AnimationScene from "./AnimationScene";

export default function HeroSection () {
    return (<>
    <div className="navbar">
      <NavBar />
    </div>
    <AnimationScene />
    <div className="footer">
        Copyright 2023 - Harimangal Pandey
        [Pvt Ltd.]
    </div>
    </>);
}