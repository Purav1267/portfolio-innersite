import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Coding Bits</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://codingbits.in/'}
                        >
                            <h4>www.codingbits.in</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Web Developer Intern</h3>
                        <b>
                            <p>June 2024 – July 2024</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Worked as a Web Developer Intern at Coding Bits, a software
                    development company based in Delhi. Gained hands-on
                    experience in full-stack development using modern web
                    technologies.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed a full-stack web application using
                            React.js, Node.js, Express.js, and MongoDB,
                            implementing both frontend and backend components.
                        </p>
                    </li>
                    <li>
                        <p>
                            Gained hands-on experience in frontend and backend
                            development, API integration, and database
                            management.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built and optimized responsive user interfaces to
                            enhance user experience and ensure cross-browser
                            compatibility.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated with the development team to implement
                            new features and improve application performance.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Leadership & Achievements</h1>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            <b>Smart India Hackathon 2025 (College Round):</b>{' '}
                            Won 1st place, outperforming 40+ teams with an
                            innovative solution.
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Operations Lead - Smart India Hackathon & Hacked
                            2.0:</b> Managed logistics, coordination, and
                            resources for 350+ participants (December 2023,
                            February 2025).
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Martial Arts & Fitness:</b> Won 20+ medals in
                            Karate Championships and Powerlifting competitions,
                            demonstrating discipline and perseverance.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
