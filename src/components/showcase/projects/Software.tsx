import React from 'react';
import ResumeDownload from '../ResumeDownload';
import proactiveAI1 from '../../../assets/pictures/projects/software/proactive-ai-1.png';
import proactiveAI2 from '../../../assets/pictures/projects/software/proactive-ai-2.png';
import proactiveAI3 from '../../../assets/pictures/projects/software/proactive-ai-3.png';
import proactiveAI4 from '../../../assets/pictures/projects/software/proactive-ai-4.png';
import tomato1 from '../../../assets/pictures/projects/software/tomato-1.png';
import tomato4 from '../../../assets/pictures/projects/software/tomato-4.png';
import tomato8 from '../../../assets/pictures/projects/software/tomato-8.png';
import tomato14 from '../../../assets/pictures/projects/software/tomato-14.jpeg';

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
                <br />
                <h3>Application Screenshots:</h3>
                <br />
                <div style={styles.screenshotGrid}>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={proactiveAI1} 
                            style={styles.screenshot} 
                            alt="ProActive AI Assistant - Initial Interface" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 1:</b> Initial interface of the ProActive AI Assistant showing the welcome screen, project information sidebar, and the user setting up team members for a team dinner organization request.
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={proactiveAI2} 
                            style={styles.screenshot} 
                            alt="ProActive AI Assistant - Restaurant Suggestions" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 2:</b> The AI assistant confirming the dinner request details and providing three highly-rated North Indian restaurant suggestions in Connaught Place, New Delhi, each with ratings and addresses.
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={proactiveAI3} 
                            style={styles.screenshot} 
                            alt="ProActive AI Assistant - Calendar Integration" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 3:</b> The AI assistant processing the user's restaurant selection, checking calendar availability, and automatically sending calendar invitations to all team members via Google Calendar API integration.
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={proactiveAI4} 
                            style={styles.screenshot} 
                            alt="ProActive AI Assistant - Event Confirmation" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 4:</b> The final result showing the team dinner event successfully created in Google Calendar with all details including date, time, location, attendees, and description - all arranged autonomously by the AI assistant.
                            </sub>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <h2>TOMATO – Multi-Stall Food Ordering Platform</h2>
                <br />
                <p>
                    TOMATO is a comprehensive full-stack food ordering platform I
                    developed using the MERN stack (MongoDB, Express.js, React.js,
                    Node.js) with Razorpay payment integration. This project
                    demonstrates my skills in building complex, multi-interface web
                    applications with role-based access control, real-time order
                    tracking, and secure payment processing.
                </p>
                <br />
                <p>
                    The platform's unique feature is its <b>multi-stall ordering
                    capability</b>, allowing customers to order from multiple
                    restaurant stalls in a single transaction. The system
                    automatically groups orders by stall and provides per-stall
                    status tracking. I built three separate interfaces: a
                    customer-facing React app, a system admin panel for overall
                    management, and a stall admin panel for individual stall
                    owners to manage their menus and orders independently.
                </p>
                <br />
                <h3>Technologies Used:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Frontend:</b> React.js, Vite, React Router DOM, Context API
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Backend:</b> Node.js, Express.js, RESTful API Architecture
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Database:</b> MongoDB with Mongoose
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Authentication:</b> JWT (JSON Web Tokens), bcrypt for password hashing
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Payment:</b> Razorpay Payment Gateway SDK
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>File Upload:</b> Multer for image handling
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Architecture:</b> Multi-port deployment with separate interfaces for Customer, Admin, and Stall Admin
                        </p>
                    </li>
                </ul>
                <br />
                <h3>Key Features:</h3>
                <ul>
                    <li>
                        <p>
                            <b>Multi-Stall Ordering:</b> Order from multiple restaurant stalls in a single transaction with automatic order segregation
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Role-Based Access Control:</b> Three separate interfaces for customers, system admins, and stall owners with JWT authentication
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Per-Stall Status Tracking:</b> Real-time order status updates for each stall independently (Food Processing → Out for delivery → Delivered)
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Promo Code System:</b> Discount code support (BML - 50% off) with cart-level application
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Pause/Unpause Items:</b> Stall owners can pause items when ingredients are unavailable, automatically hiding them from customers
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>User Feedback & Ratings:</b> Customers can rate items and provide feedback with photo uploads
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Comprehensive Admin Dashboard:</b> System-wide management of food items, orders, users, stalls, and categories
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Stall Owner Dashboard:</b> Individual dashboards for each stall owner with revenue analytics, order management, and menu control
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Secure Payment Processing:</b> Razorpay integration with payment verification and automatic order cancellation on payment failure
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Responsive Design:</b> Mobile-first approach with floating cart button and optimized UI for all devices
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Search & Filter:</b> Advanced search functionality with category filtering and item browsing
                        </p>
                    </li>
                    <li>
                        <p>
                            <b>Order History:</b> Complete order tracking with detailed information and status updates
                        </p>
                    </li>
                </ul>
                <br />
                <h3>System Architecture:</h3>
                <p>
                    The platform consists of four separate services: the
                    customer-facing frontend, the system admin panel, the stall
                    admin panel, and the unified backend API server. All services
                    communicate through RESTful APIs with JWT-based authentication,
                    ensuring secure and scalable operations.
                </p>
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
                                <b>[GitHub]</b> - TOMATO Multi-Stall Food Ordering
                                Platform Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <br />
                <p>
                    <b>Project Date:</b> September 1, 2025 - November 15, 2025
                </p>
                <br />
                <h3>Application Screenshots:</h3>
                <br />
                <div style={styles.tomatoScreenshotGrid}>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={tomato1} 
                            style={styles.screenshot} 
                            alt="TOMATO - Homepage" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 1:</b> Customer homepage with navigation, featured sections, and quick access to menu items from multiple restaurant stalls
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={tomato4} 
                            style={styles.screenshot} 
                            alt="TOMATO - Shopping Cart with Multi-Stall Ordering" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 2:</b> Shopping cart page demonstrating the unique multi-stall ordering feature, showing items from different stalls in a single cart with promo code support (BML - 50% discount)
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={tomato8} 
                            style={styles.screenshot} 
                            alt="TOMATO - Razorpay Payment Integration" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 3:</b> Razorpay payment gateway integration showing secure payment processing interface with order summary and payment verification
                            </sub>
                        </p>
                    </div>
                    <div style={styles.screenshotItem}>
                        <img 
                            src={tomato14} 
                            style={styles.screenshot} 
                            alt="TOMATO - Admin Panel" 
                        />
                        <p style={styles.caption}>
                            <sub>
                                <b>Figure 4:</b> Main admin panel displaying comprehensive system management with complete list of all food items across all stalls, demonstrating centralized control and oversight capabilities
                            </sub>
                        </p>
                    </div>
                </div>
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

const styles: StyleSheetCSS = {
    screenshotGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
    },
    tomatoScreenshotGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 20,
        width: '100%',
        marginTop: 16,
        marginBottom: 16,
    },
    screenshotItem: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    screenshot: {
        width: '100%',
        height: 'auto',
        borderRadius: 8,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        marginBottom: 8,
    },
    caption: {
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 0,
        padding: '0 8px',
        fontSize: 14,
    },
};

export default SoftwareProjects;
