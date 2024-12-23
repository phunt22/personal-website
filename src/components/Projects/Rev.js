import React from 'react'
import NavBar from '../NavBar'
import '../../styles/projects/rev.css'

export default function REV() {
    return (
        <div>
            <NavBar title={'REV Delivery'} />
            <div className="project-page">
                <p className="project-description">
                    REV Delivery is a platform built specifically for college students at the University of Washington,
                    offering snacks and other essentials delivered in <strong>10 minutes or less</strong> for just $0.99 (on scooters).
                </p>
                <p className="project-description">
                    The technical stack behind REV prioritizes a smooth user experience with a lightweight, maintainable
                    architecture. Key features include:
                </p>
                <ul className="project-tech-details">
                    <li>
                        <strong>React Native Mobile App:</strong> Built a cross-platform application with a focus on a
                        smooth and intuitive frontend.
                    </li>
                    <li>
                        <strong>Stripe Payment Integration:</strong> Implemented secure and efficient payment processing
                        to handle thousands of transactions per month.
                    </li>
                    <li>
                        <strong>Shopify API:</strong> Used Shopify to simplify inventory management and order processing,
                        keeping the tech stack affordable and scalable.
                    </li>
                </ul>
                <p className="project-description">
                    The platform has grown significantly, scaling to handle <strong>5,000+ users</strong> and <strong>thousands of monthly orders</strong>.
                    REV has become a cornerstone of convenience for UW students.
                </p>
                <div className="project-images">
                    <img
                        src="/assets/images/rev_1.png"
                        className="project-image"
                    />
                    <img
                        src="/assets/images/rev_2.png"
                        className="project-image"
                        alt='REV search screen'
                    />
                    <img
                        src="/assets/images/rev_3.png"
                        className="project-image"
                        alt='REV payment screen'
                    />
                </div>
                <a
                    href="https://apps.apple.com/us/app/rev-delivery/id6477323287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-download"
                >
                    Download on iOS!
                </a>
            </div>
        </div>
    )
}
