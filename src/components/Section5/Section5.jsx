import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import SeaBed from "../../assets/images/sea-bed.png";

import { gsap } from "gsap";
import Ruins from "../../assets/svgs/Ruins";
import DiverMeditating from "../../assets/svgs/DiverMeditating";
import AnglerFish from "../../assets/svgs/AnglerFish";
import Comment from "../Comment/Comment";

import { ReactComponent as MailRuin } from "../../assets/svgs/mail-ruin.svg";
import { ReactComponent as GithubRuin } from "../../assets/svgs/github-ruin.svg";
import { ReactComponent as LinkedInRuin } from "../../assets/svgs/linkedin-ruin.svg";
import { useWindowSize } from "react-use";

const Section5 = () => {
    const containerRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width < 600) return;

        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".five",
                    pinSpacing: false,
                    start: "-=200 top",
                    end: "top top",
                    scrub: 1,
                },
            });
            t1.from(".angler-svg", {
                opacity: 0,
                scale: 0.6,
                duration: 1,
            })
                .from(".ruins", {
                    opacity: 0,
                    scale: 0.6,
                    duration: 1,
                })
                .from(
                    ".diver-med",
                    { opacity: 0, scale: 0.6, duration: 1 },
                    "-=1"
                )
                .from(".board-container", {
                    yPercent: 100,
                    duration: 3,
                })
                .from(".five-comment", {
                    opacity: 0,
                    scale: 0.6,
                    duration: 1,
                });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            <section className="five">
                <div className="angler float-anim">
                    <AnglerFish
                        className="cursor-pointer angler-svg"
                        width={150}
                        onClick={() => setIsVisible(!isVisible)}
                        isGlowing={isVisible}
                    />
                    <Comment
                        text={
                            isVisible ? "Do not click me!" : "Brighten it back!"
                        }
                        className="topLeft five-comment"
                    />
                </div>
                <div className="board-container">
                    <div className="left-view"></div>

                    <div className="board">
                        <p className="board-text">
                            Love my work? Get in touch!
                        </p>
                        <div className="ruin-icons-container">
                            <MailRuin
                                className="ruin-icon"
                                onClick={() =>
                                    window.open(
                                        "mailto:kanduarul@gmail.com"
                                    )
                                }
                            />
                            <GithubRuin
                                className="ruin-icon"
                                onClick={() =>
                                    window.open(
                                        "https://github.com/ak5123",
                                        "_blank"
                                    )
                                }
                            />
                            <LinkedInRuin
                                className="ruin-icon"
                                onClick={() =>
                                    window.open(
                                        "https://www.linkedin.com/in/ak5123/",
                                        "_blank"
                                    )
                                }
                            />
                        </div>
                        <a
                            href="https://docs.google.com/document/d/1rFLcrxEjh92nkyoltGzD_zM-vm2bGHj_DVXYXvfxFgI/edit?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="board-text resume-text"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                <img src={SeaBed} alt="sea-bed" className="sea-bed" />
                <Ruins width={150} className="ruins" />
                <DiverMeditating className="diver-med breathe" width={120} />
                {!isVisible && <div className="dark-gradient"></div>}
                <a
                    className="bottom-text"
                    href="https://github.com/ak5123"
                    target="_blank"
                    rel="noreferrer"
                >
                    {"Designed and Built with ❤️ using ReactJs and Figma"}
                </a>
            </section>
        </div>
    );
};

export default Section5;
