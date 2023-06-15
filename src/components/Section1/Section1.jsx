import "./styles.css";

import React, { useEffect, useRef, useState } from "react";

import { gsap } from "gsap";
import Waves from "../Waves/Waves";
import { DiverStanding } from "../../assets/svgs/DiverStanding";
import { DiverJumping } from "../../assets/svgs/DiverJumping";
import DiverFalling from "../../assets/svgs/DiverFalling";
import Comment from "../Comment/Comment";
import { useWindowSize } from "react-use";

const Section1 = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const indexRef = useRef(0);
    const [showComment, setShowComment] = useState(true);

    const { width } = useWindowSize();

    const onUpdate = (e) => {
        const { progress } = e;
        if (progress < 0.1 && indexRef.current !== 0) {
            indexRef.current = 0;
            setImageIndex((prev) => 0);
        } else if (progress < 0.4 && progress > 0.1 && indexRef.current !== 1) {
            indexRef.current = 1;
            setImageIndex((prev) => 1);
        } else if (progress > 0.4 && indexRef.current !== 2) {
            indexRef.current = 2;
            setImageIndex((prev) => 2);
        }
    };

    useEffect(() => {
        if (imageIndex === 0) {
            showComment || setShowComment(true);
        } else {
            showComment && setShowComment(false);
        }
    }, [imageIndex]);

    useEffect(() => {
        if (width < 600) return;
        let ctx = gsap.context(() => {
            gsap.to(".stand", {
                scrollTrigger: {
                    trigger: ".one",
                    start: "top top",
                    scrub: true,
                },
                yPercent: 60,
            });

            let t2 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".one",
                    onUpdate: onUpdate,
                    start: "top top",
                    scrub: true,
                },
            });

            t2.to(".character", { scale: 1.2, duration: 1 }).to(".character", {
                y: "40vh",
                scale: 1.4,
                duration: 3,
            });
        });

        return () => ctx.revert();
    }, []);

    const getDiver = () => {
        switch (imageIndex) {
            case 0:
                return <DiverStanding width={120} />;
            case 1:
                return <DiverJumping width={133} />;
            case 2:
                return <DiverFalling width={208} />;
            default:
                return <DiverStanding width={120} />;
        }
    };

    return (
        <section className="one">
            <div className="stand">
                <div className="top"></div>
                <div className="stick"></div>
            </div>
            <div className="character">
                {showComment && (
                    <Comment
                        text={
                            <span>
                                Hi! I'm Kandavel
                                <br />
                                <br />A generalist and <br />
                                polyglot builder
                            </span>
                        }
                        className="bottomRight one-comment"
                    />
                )}
                {getDiver()}
            </div>
            <Waves />
        </section>
    );
};

export default Section1;
