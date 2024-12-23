import React from 'react'
import '../styles/nav.css'
import { House, Moon, Sun } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { useTheme } from '../ThemeContext'

export default function NavBar({ title }) {
    const { darkMode, setDarkMode } = useTheme();
    return (
        <div className='nav-container'>
            <Link to={'/'} >
                <House size={32} weight='fill' style={{ marginLeft: 12 }} />
            </Link>

            {title && <h1>{title}</h1>}


            <div
                className='toggle-container'
                onClick={() => setDarkMode(!darkMode)}
            >
                {darkMode ? <Sun size={32} weight='fill' style={{ marginRight: 12 }} /> : <Moon size={32} weight='fill' style={{ marginRight: 12 }} />}
            </div>
        </div>
    )
}