import React from 'react';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Purav Malik</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a Computer Science student at BML Munjal University (BTech, CGPA 8.04)
                    who enjoys turning ideas into working products. Most of my work sits at the
                    intersection of full‑stack development and AI, where I like building tools
                    that feel practical, fast, and a little bit fun to use.
                </p>
                <br />
                <p>
                    Thanks for taking the time to check out my portfolio. If anything here
                    sparks an idea or you’d like to collaborate, feel free to reach out using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:puravmalik24@gmail.com">
                        puravmalik24@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    I’ve always been curious about how systems work—first in the physical
                    world, and then in software. That curiosity led me to Computer Science
                    at BML Munjal University in Gurugram, where I’ve been sharpening my
                    skills in full‑stack development, AI, and software engineering.
                </p>
                <br />
                <p>
                    During university, I moved from simple scripts to building full
                    applications with technologies like React.js, Node.js, and MongoDB.
                    I’ve worked on projects such as AI assistants, a smart waste route
                    optimizer, and production‑style web apps. In the summer of 2024,
                    I interned at Coding Bits as a Web Developer, where I worked across
                    the stack on real features, API integrations, and database‑driven
                    functionality.
                </p>
                <br />
                <p>
                    A few experiences I’m particularly proud of: winning 1st place in the
                    Smart India Hackathon 2025 (College Round) among 40+ teams, and serving
                    as Operations Lead for Smart India Hackathon & Hacked 2.0, where I helped
                    run events for 350+ participants. Outside pure coding, these roles taught
                    me how to plan, communicate, and keep things moving under pressure.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies & Interests</h3>
                        <br />
                        <p>
                            Outside of tech, I’m very serious about martial arts and fitness.
                            Over the years I’ve earned 20+ medals in Karate Championships and
                            Powerlifting competitions, which has shaped how I approach my work:
                            consistent practice, honest feedback, and always pushing a little
                            beyond my comfort zone.
                        </p>
                        <br />
                        <p>
                            I enjoy projects that solve real problems—whether that’s making
                            everyday tasks smoother with a web app, or using data and AI to
                            make systems smarter. When I’m not coding, you’ll usually find me
                            training, exploring new technologies, or sketching ideas for the
                            next thing I want to build.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.professionalImage} alt="Purav Malik" />
                        <p>
                            <sub>
                                <b>Figure 1:</b> Professional Photo
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. If you find the easter egg make sure to let me know
                    on twitter{' '}
                    <a
                        rel="noreferrer"
                        target="_blank"
                        href="https://x.com/purav_malik"
                    >
                        @purav_malik
                    </a>{' '}
                    Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:puravmalik24@gmail.com">
                        puravmalik24@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        marginLeft: 32,
        flex: 0.8,
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
    },
    professionalImage: {
        height: 'auto',
        width: '100%',
        maxWidth: 400,
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default About;
