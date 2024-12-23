import React from 'react'
import '../styles/tech.css'


const technologies = [
    { name: 'React/React Native', icon: 'devicon-react-original colored', highlight: true },
    { name: 'Express', icon: 'devicon-express-original colored' },
    { name: 'Pandas', icon: 'devicon-pandas-plain colored' },
    { name: 'NumPy', icon: 'devicon-numpy-plain colored' },
    { name: 'Scikit-learn', icon: 'devicon-python-plain colored' },
    { name: 'HTML', icon: 'devicon-html5-plain colored' },
    { name: 'CSS', icon: 'devicon-css3-plain colored' },
    { name: 'Photoshop', icon: 'devicon-photoshop-plain colored' },
    { name: 'LaTeX', icon: 'devicon-latex-original colored' },
    { name: 'TypeScript', icon: 'devicon-typescript-original colored', highlight: true },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored', highlight: true },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'C', icon: 'devicon-c-plain colored' },
    { name: 'Git', icon: 'devicon-github-original colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'Python', icon: 'devicon-python-plain colored' }
    // python
    // c
    // javascript
    // typescript
    // java
    // html, css
    // react, react native, 
    // pandas, numpy, scikitlearn, matplotlib
    // firebase, sql
    // git
    // express, etc.
    // photoshop, latex
];

export default function Tech() {
    const highlightedTech = technologies.filter(t => t.highlight);
    const nonHighlightedTech = technologies.filter(t => !t.highlight);
    const scrollingTech = nonHighlightedTech.concat(nonHighlightedTech);

    return (
        <section className="technologies">
            <h2>Technologies</h2>
            {/* Highlighted Technologies Section */}
            <div className="highlighted-section">
                {highlightedTech.map((tech, index) => (
                    <div key={index} className="highlighted-item">
                        <i className={`${tech.icon} highlighted-icon`}></i>
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>

            <div className="carousel">
                <div className="carousel-content">
                    {scrollingTech.map((tech, index) => (
                        <div key={index} className="carousel-item">
                            <i className={`${tech.icon} tech-icon`}></i>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ height: 20, width: 1 }}>

            </div>
            <div className="carousel reverse">
                <div className="carousel-content-reverse">
                    {scrollingTech.map((tech, index) => (
                        <div key={index} className="carousel-item">
                            <i className={`${tech.icon} tech-icon`}></i>
                            <p>{tech.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
