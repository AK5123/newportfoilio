import "./App.css";

import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section1 from "./components/Section1/Section1";
import Section3 from "./components/Section3/Section3";
import Section2 from "./components/Section2/Section2";
import Section4 from "./components/Section4/Section4";
import Section5 from "./components/Section5/Section5";
import CrabWithResume from "./assets/svgs/CrabWithResume";
import { ReactComponent as Rock } from "./assets/svgs/rock.svg";

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.defaults({ toggleActions: "play pause resume reverse" });

function App() {
    return (
        <div className="App">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <CrabWithResume
                onClick={() =>
                    window.open(
                        "https://docs.google.com/document/d/1rFLcrxEjh92nkyoltGzD_zM-vm2bGHj_DVXYXvfxFgI/edit?usp=sharing",
                        "_blank"
                    )
                }
                className="crab-with-resume"
            />
            <Rock className="land-crab" />
        </div>
    );
}

export default App;
