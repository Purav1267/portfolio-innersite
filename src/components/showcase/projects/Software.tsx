import React from 'react';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Pro-Active AI Assistant</h2>
                <br />
                <p>
                    An autonomous AI agent I built during a 2-day hackathon using
                    Google Gemini 1.5 LLM with multi-turn conversational
                    abilities. This project demonstrates my interest and skills
                    in artificial intelligence and large language models.
                </p>
                <br />
                <p>
                    The assistant integrates with Google Places API and Google
                    Calendar API to enable end-to-end team dinner planning. It
                    features intelligent workflow orchestration that allows the
                    AI to make decisions and take actions autonomously, going
                    beyond simple question-answering to actively help users
                    accomplish tasks.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Language:</b> Python
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>AI/ML:</b> Google Gemini 1.5 LLM, Artificial
                            Intelligence
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>APIs:</b> Google Places API, Google Calendar API
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Platform:</b> Google Cloud Console
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            Multi-turn conversational abilities with context
                            retention
                        </p>
                    </li>
                    <li>
                        <p>
                            Integration with Google Places API for location
                            services
                        </p>
                    </li>
                    <li>
                        <p>
                            Google Calendar API integration for scheduling
                        </p>
                    </li>
                    <li>
                        <p>
                            End-to-end team dinner planning automation
                        </p>
                    </li>
                    <li>
                        <p>
                            Intelligent workflow orchestration
                        </p>
                    </li>
                    <li>
                        <p>
                            Autonomous decision-making capabilities
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/purav1267/proactive-ai-assistant"
                            style={{ color: 'purple' }}
                        >
                            <p>
                                <b>[GitHub]</b> - Pro-Active AI Assistant
                                Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    <b>Project Date:</b> August 1-3, 2025 (2-day Hackathon)
                </p>
            </div>
            <div className="text-block">
                <h2>TOMATO – Food Ordering Website</h2>
                <br />
                <p>
                    TOMATO is a full-stack food ordering platform I developed
                    using the MERN stack (MongoDB, Express.js, React.js,
                    Node.js) with Razorpay payment integration. This project
                    demonstrates my skills in building complete web applications
                    with user authentication, order management, and secure
                    payment processing.
                </p>
                <br />
                <p>
                    The application features a user-friendly interface for
                    customers to browse menus, add items to cart, and place
                    orders. I also implemented a comprehensive admin panel that
                    allows restaurant owners to manage menu items, track orders,
                    and view analytics. The integration with Razorpay ensures
                    secure and seamless payment transactions.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Frontend:</b> React.js, HTML/CSS, JavaScript
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Backend:</b> Node.js, Express.js
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Database:</b> MongoDB
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Payment:</b> Razorpay API
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            User authentication and profile management
                        </p>
                    </li>
                    <li>
                        <p>
                            Menu browsing with categories and search functionality
                        </p>
                    </li>
                    <li>
                        <p>
                            Shopping cart with real-time updates
                        </p>
                    </li>
                    <li>
                        <p>
                            Secure payment processing via Razorpay
                        </p>
                    </li>
                    <li>
                        <p>
                            Admin dashboard for order and menu management
                        </p>
                    </li>
                    <li>
                        <p>
                            Order tracking and history
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/Purav1267/Food-Ordering-Website"
                            style={{ color: 'purple' }}
                        >
                            <p>
                                <b>[GitHub]</b> - TOMATO Food Ordering Website
                                Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    <b>Project Date:</b> September 1, 2025 - November 15, 2025
                </p>
            </div>
            <div className="text-block">
                <h2>Smart Waste Route Optimizer</h2>
                <br />
                <p>
                    An intelligent routing system I engineered to solve the
                    Capacitated Vehicle Routing Problem (CVRP) for waste
                    collection. This project uses Google OR-Tools for
                    optimization and integrates with the OSRM API for accurate
                    route calculations.
                </p>
                <br />
                <p>
                    The system simulates truck routes for 15+ bins over a 7-day
                    cycle, significantly reducing travel distance and improving
                    efficiency. I generated interactive Folium maps to visualize
                    the optimized routes, making it easy for waste management
                    teams to understand and implement the solutions.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Language:</b> Python
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Optimization:</b> Google OR-Tools
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Mapping:</b> Folium, OSRM API
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Domain:</b> GIS (Geographic Information Systems)
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            Solves CVRP to optimize waste collection routes
                        </p>
                    </li>
                    <li>
                        <p>
                            Simulates routes for 15+ bins over 7-day cycles
                        </p>
                    </li>
                    <li>
                        <p>
                            Reduces travel distance and fuel consumption
                        </p>
                    </li>
                    <li>
                        <p>
                            Generates interactive Folium maps for visualization
                        </p>
                    </li>
                    <li>
                        <p>
                            Integrates with OSRM API for accurate routing
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    <b>Project Date:</b> December 2024
                </p>
            </div>
            <div className="text-block">
                <h2>Ad-Free Proxy Server</h2>
                <br />
                <p>
                    A secure proxy server I built with ad-blocking, caching, and
                    monitoring capabilities. This project combines networking,
                    security, and system administration skills to create a
                    privacy-focused browsing solution.
                </p>
                <br />
                <p>
                    The server uses Squid Proxy for core functionality, Pi-hole
                    for ad-blocking, and Docker for containerization. I
                    configured Ngrok tunneling with a Discord notification bot
                    for remote access and monitoring. The services are deployed
                    via systemd for reliable operation.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Networking:</b> Squid Proxy, Pi-hole
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Containerization:</b> Docker
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Tunneling:</b> Ngrok
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Monitoring:</b> Discord Bot, systemd
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            Secure proxy server with ad-blocking capabilities
                        </p>
                    </li>
                    <li>
                        <p>
                            Intelligent caching to improve browsing performance
                        </p>
                    </li>
                    <li>
                        <p>
                            Real-time monitoring and notifications via Discord
                        </p>
                    </li>
                    <li>
                        <p>
                            Ngrok tunneling for secure remote access
                        </p>
                    </li>
                    <li>
                        <p>
                            Docker containerization for easy deployment
                        </p>
                    </li>
                    <li>
                        <p>
                            systemd service management for reliability
                        </p>
                    </li>
                    <li>
                        <p>
                            Enhanced user privacy and browsing performance
                        </p>
                    </li>
                </ul>
                <br />
                <p>
                    <b>Project Date:</b> December 2024
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

export default SoftwareProjects;
