import React from 'react'
import '../styles/portfolio.css';
import { Link } from 'react-router-dom';
import { projects } from '../utils/projects';



export default function Portfolio() {
    return (
        <section>
            <h1 className='title'>My Work</h1>
            <div className="portfolio-container">
                {
                    projects.map((project) => {
                        const link = project.url ? project.url : `/projects/${project.name.toLowerCase().replace(/\s+/g, '')}`;
                        const isExternal = !!project.url;

                        return (
                            <a
                                key={project.id}
                                href={link}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : undefined}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="portfolio-card">
                                    <img
                                        src={`../../assets/images/${project?.imageName}`}
                                        alt={project.name}
                                        className="portfolio-image"
                                    />
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </a>
                        )
                    })
                }
                {/* {
                    projects.map((project) => {
                        let route;
                        switch (project.name) {
                            case 'KInARow Bot':
                                route = '/projects/kinarow';
                                break;
                            case 'REV Delivery':
                                route = '/projects/rev';
                                break;
                            case 'Shout':
                                route = '/projects/shout';
                                break;
                            default:
                                route = '/projects/default';
                        }
                        return (
                            // https://youtu.be/ZBi613l0N6w?si=NUq6nmRMOue2QC3q
                            <Link
                                key={project.id}
                                to={route}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div key={project.id} className="portfolio-card">
                                    <img
                                        src={`../../assets/images/${project?.imageName}`}
                                        alt={project.name}
                                        className="portfolio-image"
                                    />
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                            </ Link >
                        )
                    })} */}
            </div>
        </section>
    )
}
