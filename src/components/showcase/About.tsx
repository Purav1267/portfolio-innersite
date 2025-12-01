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
                    I'm a Computer Science student at BML Munjal University,
                    currently pursuing my Bachelor of Technology degree with a
                    CGPA of 8.04. I'm passionate about full-stack development,
                    AI, and building innovative solutions to real-world problems.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
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
                    From a young age, I have had a curiosity about how things
                    worked. This naturally led me to explore technology and
                    programming. I'm currently studying Computer Science at BML
                    Munjal University in Gurugram, Haryana, where I've been
                    developing my skills in full-stack development, AI, and
                    software engineering.
                </p>
                <br />
                <p>
                    I started programming more seriously during my university
                    years, focusing on full-stack development using modern
                    technologies like React.js, Node.js, and MongoDB. I've worked
                    on various projects ranging from web applications to AI
                    assistants and route optimization systems.                     In the summer of
                    2025, I completed an internship at Coding Bits as a Web
                    Developer, where I gained hands-on experience in frontend and
                    backend development, API integration, and database
                    management.
                </p>
                <br />
                <p>
                    Some of my notable achievements include winning 1st place in
                    the Smart India Hackathon 2025 (College Round), where I
                    outperformed 40+ teams. I've also served as Operations Lead
                    for Smart India Hackathon & Hacked 2.0, managing logistics
                    and coordination for 350+ participants. Beyond academics, I
                    have a passion for martial arts and fitness, having won 20+
                    medals in Karate Championships and Powerlifting competitions.
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
                            Beyond software development, I have a passion for
                            martial arts and fitness. I've won 20+ medals in
                            Karate Championships and Powerlifting competitions,
                            which has taught me discipline, perseverance, and the
                            importance of continuous improvement - values that I
                            apply to my work in software development as well.
                        </p>
                        <br />
                        <p>
                            I also enjoy working on innovative projects that
                            solve real-world problems, whether it's building
                            full-stack applications, developing AI assistants,
                            or creating route optimization systems. When I'm not
                            coding, I like to stay active, learn new
                            technologies, and contribute to open-source
                            projects.
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
                        href="https://twitter.com/puravmalik"
                    >
                        @puravmalik
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
