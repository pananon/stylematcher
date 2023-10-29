import NavBar from "./NavBar";
import AnimationScene from "./AnimationScene";

export default function HeroSection () {
    return (<>
    <div className="navbar">
        <NavBar />
    </div>
    <div className="animation-v">
        <AnimationScene />
    </div>
    <div className="scroller">
        Scroller Animation
    </div>
    </>);
}