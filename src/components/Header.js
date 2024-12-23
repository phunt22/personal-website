import { EnvelopeSimple, FileText, LinkedinLogo } from '@phosphor-icons/react'
import React from 'react'
import '../styles/header.css';

export default function Header() {
    return (
        <header className='header'>
            {/* <h1 className='title'>
                Hi, I'm Will!
            </h1> */}
            <div className='profile-container'>
                <img
                    src="/assets/images/georgetownW.png"
                    alt="Me on a run!"
                    className="profile-pic"
                />
                <ul className="contact-links">
                    <li>
                        <a href='mailto:pw.hunt11@gmail.com'>
                            <EnvelopeSimple size={32} />
                            <p>
                                pw.hunt11@gmail.com
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href='/assets/images/Will_Hunt_Resume.pdf' download>
                            <FileText size={32} />
                            <p>
                                Resume
                            </p>
                        </a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/william-hunt-7895a3212/' target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo size={32} />
                            <p>
                                LinkedIn
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
