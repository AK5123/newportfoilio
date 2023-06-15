import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { DiverLookdown } from "../../assets/svgs/DiverLookdown";
import Comment from "../Comment/Comment";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useWindowSize } from "react-use";

const Section3 = () => {
    const headRef = useRef();
    const boxCenter = useRef(null);
    const containerRef = useRef();
    const { width } = useWindowSize();

    useEffect(() => {
        let boxBoundingRect = headRef.current?.getBoundingClientRect?.();
        if (!boxBoundingRect) return;
        let center = {
            x: boxBoundingRect.left + boxBoundingRect.width / 2,
            y:
                boxBoundingRect.top +
                window.pageYOffset +
                boxBoundingRect.height / 2,
        };
        boxCenter.current = center;
    }, []);

    useEffect(() => {
        const onMouseMove = (e) => {
            if (!boxCenter) return;

            let angle =
                Math.atan2(
                    e.pageX - boxCenter.current.x,
                    -(e.pageY - boxCenter.current.y)
                ) *
                (180 / Math.PI);
            if (Math.abs(angle) > 89 && Math.abs(angle) < 181) {
                headRef.current.style.transform = `rotate(${angle - 180}deg)`;
            }
        };

        document.addEventListener("mousemove", onMouseMove);

        return () => window.removeEventListener("mousemove", onMouseMove);
    }, []);

    useEffect(() => {
        const onScroll = (e) => {
            let boxBoundingRect = headRef?.current?.getBoundingClientRect?.();
            if (!boxBoundingRect) return;
            let center = {
                x: boxBoundingRect.left + boxBoundingRect.width / 2,
                y:
                    boxBoundingRect.top +
                    window.pageYOffset +
                    boxBoundingRect.height / 2,
            };
            boxCenter.current = center;
        };
        document.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        if (width < 600) return;
        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".three",
                    pinSpacing: false,

                    start: "-=200 top",
                    // end: "top top",
                    // scrub: 1,
                },
            });
            t1.from(".diver-lookdown", {
                opacity: 0,
                scale: 0.7,
                duration: 0.2,
            })
                .from(".project-card-container", {
                    opacity: 0,
                    scale: 0,
                    duration: 0.2,
                    stagger: 0.1,
                })
                .from(".three-comment", {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.1,
                });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            <section className="three">
                <div className="float-anim">
                    <DiverLookdown
                        headRef={headRef}
                        className="diver-lookdown"
                    />
                </div>
                <Comment
                    className="topLeft three-comment"
                    text="Things I've worked on"
                ></Comment>
                <div className="projects-container hide-scrollbar">
                    <div className="project-one float-updown no-cursor-anim">
                        <ProjectCard
                            name="StegCloak  🧙🏻‍♂️⭐"
                            subtitle="2.5k stars on Github"
                            text="StegCloak is a pure JavaScript steganography module designed in pure functional programming style, to hide secrets inside the text by compressing and encrypting with Invisible Characters"
                            color="#1c1a39"
                            github="https://github.com/KuroLabs/stegcloak"
                            image="navigit-logo"
                            demo="https://www.youtube.com/watch?v=RBDqZwcGvQk"
                        />
                    </div>
                    <div className="project-two float-updown no-cursor-anim">
                        <ProjectCard
                            name="AirShare ✈️"
                            subtitle="550 Stars & 40K+ downloads"
                            text="Airshare is a Python-based CLI tool and module that lets you transfer data between two machines in a local network, P2P, using Multicast-DNS"
                            github="https://github.com/KuroLabs/Airshare"
                            color="#7093E2"
                            iconText="AR"
                            demo="https://www.youtube.com/watch?v=iJH6bkLRdSw"
                        />
                    </div>
                    <div className="project-three float-updown no-cursor-anim">
                        <ProjectCard
                            name="Teleport 🔭⚡"
                            subtitle="Inout 7.0 India’s largest community hackathon winner"
                            text="A fully decentralized P2P file-sharing tool with unlimited capacity in your web browser using WebRTC. Won a grant of 1 Lakh via quadratic funding to get the product to the market"
                            color="#FFFFFF"
                            image="ssnce-logo"
                            demo="https://devfolio.co/submissions/teleport"
                            site="https://teleporter.surge.sh/"
                        />
                    </div>
                    <div className="project-four float-updown no-cursor-anim">
                        <ProjectCard
                            name="Virtual Galaxy 🌠🌌"
                            subtitle="1st place Facebook hackathon 2019"
                            text="A React 360 web app that allows friends and strangers to watch anything together peer to peer using WebRTC and web sockets"
                            site="https://vrtheater.surge.sh/"
                            demo="https://youtu.be/u6wHv34VSVE"
                        />
                    </div>
                    <div className="project-five float-updown no-cursor-anim">
                        <ProjectCard
                            name="Others 💁🏻‍♂️✨"
                            subtitle="Github"
                            text="Check out my github to find more cool and mad science projects"
                            className="cursor-pointer"
                            onClick={() =>
                                window.open(
                                    "https://github.com/ak5123",
                                    "_blank"
                                )
                            }
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section3;
