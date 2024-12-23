import React from 'react'
import NavBar from '../NavBar'

export default function Ripple({ darkMode, setDarkMode }) {
    return (
        <div>
            <NavBar title={'Ripple'} darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
    )
}
