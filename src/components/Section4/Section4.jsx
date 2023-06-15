import "./styles.css";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import DiverRightSwim from "../../assets/svgs/DiverRightSwim";
import { InvertedCrab } from "../../assets/svgs/InvertedCrab";
import BannerBottom from "../../assets/svgs/BannerBottom";
import Comment from "../Comment/Comment";
import { useWindowSize } from "react-use";

const Section4 = () => {
    const containerRef = useRef();
    const [pipeIndex, setPipeIndex] = useState(3);
    const { width } = useWindowSize();

    const companies = ["Ramco System", "Phantom DAO", "Swix DAO", "Lines"];

    const content = [
        {
            from: "March 2021",
            to: "Jun 2022",
            role: "SDE",
            at: {
                name: "Ramco System",
                link: "https://www.ramco.com/",
            },
            work: [
                "Developed a Timesheet Plugin for JIRA, which acts as a time tracker and reduced the time effort for fellow employees.",
                "Built a QA dashboard that helps users to understand the quality of product versions/customer implementation and features to drill down and analyse test execution results at various levels and dimensions. Reduced the time spent by analysts to almost 60%. Used ELK + MERN stack.",
            ],
        },
        {
            from: "Jan 2022",
            to: "March 2022",
            role: "Founding Team",
            at: {
                name: "Phantom DAO",
                link: "https://twitter.com/xPhantomDAO",
            },
            work: [
                "Olympus’ partner in the Fantom ecosystem. Part of the core team who built and launched the protocol along with a dutch auction.",
            ],
        },
        {
            from: "Mar 2021",
            to: "July 2022",
            role: "Founding Team",
            at: {
                name: "Swix DAO",
                link: "https://linktr.ee/swixdao",
            },
            work: [
                "Built and deployed the booking dapp with Chainlink integration for seed funding.",  
                "Modified the backend system and switched to Arweave from IPFS, reducing the load time of metadata by 50%.",
            ],
        },
        {
            from: "Sept 2022",
            to: "Present",
            role: "Founding Engineer",
            at: {
                name: "Lines",
                link: "https://www.linkedin.com/company/bylines/",
            },
            work: [
                "As the Lead Front-End Engineer, spearheaded the development and maintenance of a customizable messaging widget, enabling easy integration into any application with minimal code.",
                "Facilitated customer onboarding, enhancing the overall user experience.",
                "Designed, built, and deployed a web3 messaging widget as a NPM package from scratch.",               
            ],
        },
    ];

    useEffect(() => {
        if (width < 600) return;

        let ctx = gsap.context(() => {
            let t1 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".four",
                    pinSpacing: false,
                    start: "-=250 top",
                    // end: "top top",
                    // scrub: 1,
                },
            });
            t1.from(".diver", {
                xPercent: -100,
                duration: 0.4,
            })
                .from(".pipe-container", {
                    xPercent: -100,
                    duration: 0.6,
                })
                .from(".crab", {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.1,
                })
                .from(".banner", {
                    opacity: 0,
                    yPercent: 100,
                    duration: 0.3,
                })

                .from(".four-comment", {
                    opacity: 0,
                    scale: 0.7,
                    duration: 0.1,
                });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const {
        from,
        to,
        role,
        at: { name: companyName, link },
        at2,
        work,
    } = content[pipeIndex];

    const { name: companyName2, link: link2 } = at2 || {};
    return (
        <div ref={containerRef}>
            <section className="four">
                <div className="diver-container float-anim">
                    <DiverRightSwim height={120} className="diver" />
                    <Comment
                        text="My Journey"
                        className="topLeft four-comment"
                    ></Comment>
                </div>
                <div className="pipe-container">
                    <Pipe style={{ flex: 1, padding: 0 }} />
                    <PipeConnector />

                    <div className="exp-pipe-container">
                        {companies.map((name, index) => {
                            const isLast = index === companies.length - 1;
                            return (
                                <>
                                    <Pipe
                                        isSelected={index === pipeIndex}
                                        key={2 * index}
                                        text={name}
                                        onClick={() => setPipeIndex(index)}
                                    />
                                    {isLast || (
                                        <PipeConnector key={2 * index + 1} />
                                    )}
                                </>
                            );
                        })}
                    </div>
                    <PipeConnector />

                    <Pipe style={{ flex: 1, padding: 0 }} />
                </div>
                <div className="banner-with-crab">
                    <InvertedCrab className="crab" />

                    <div className="banner">
                        <div className="banner-top"></div>
                        <div className="banner-sheet">
                            <div className="banner-sheet-content">
                                <h2 className="job-title">
                                    {role}{" "}
                                    <span
                                        className="company-name"
                                        onClick={() =>
                                            window.open(link, "_blank")
                                        }
                                    >
                                        @{companyName}
                                    </span>
                                    {companyName2 && (
                                        <span
                                            className="company-name2"
                                            onClick={() =>
                                                window.open(link2, "_blank")
                                            }
                                        >
                                            @{companyName2}
                                        </span>
                                    )}
                                </h2>
                                <div className="banner-content">
                                    <Stepper from={from} to={to} />
                                    <div className="banner-desc">
                                        {work.map((p, index) => {
                                            return (
                                                <p
                                                    key={index}
                                                    className="banner-text"
                                                >
                                                    {p}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            <BannerBottom width={"100%"} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const Pipe = ({ text, onClick, isSelected, style }) => {
    return (
        <div
            onClick={onClick}
            style={style}
            className={`pipe ${isSelected ? "pipe-selected" : ""}`}
        >
            {text}
        </div>
    );
};

const PipeConnector = () => {
    return (
        <div className="pipe-connector">
            <div className="pipe-bolt" />
            <div className="pipe-bolt" />
            <div className="pipe-bolt" />
        </div>
    );
};

const Stepper = ({ from, to }) => {
    return (
        <div className="stepper-container">
            <p className="stepper-text">{from}</p>
            <div className="stepper-point" />
            <div className="stepper-line" />
            <div className="stepper-point" />
            <p className="stepper-text">{to}</p>
        </div>
    );
};

export default Section4;
