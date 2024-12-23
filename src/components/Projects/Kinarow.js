import React from 'react'
import NavBar from '../NavBar'
import '../../styles/projects/kinarow.css'

export default function Kinarow({ darkMode, setDarkMode }) {
    return (
        <div >

            <NavBar title={'KInARow'} darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className='project-page'>
                <p className="project-description">
                    This was a project for CSE473: Intro to AI at the University of Washington, where the final
                    project was a class-wide competition.
                </p>
                <p className="project-description">
                    {"\n"}My bot used the minimax search algorithm with alpha-beta pruning. Additionally, I ordered moves
                    by a static evaluation function, which improved AB cutoffs and led to performance improvements by up to 6x.
                </p>

                <p className="project-description">
                    {"\n"}One key part of the project was "utterances," which are dialogues to your opponent basead on game state after each turn.
                    We were told to give our bot a character, I chose mine to be LeBron James (LeBot). To do this, I parsed my game state to represent relevant game
                    information as a string, and had OpenAI's API respond based on the game data, such as previous utterances (including oppenent), evaluation scores,
                    previous moves, and more. Along with this data, I also included a system prompt which I tuned via trial and error to get something that I was happy enough with.
                </p>


                <p className="project-description">
                    {"\n"} In the tournament, my bot placed in the top 50% of the class, which got me extra credit on the assignment. I never received detailed tournament results,
                    but I believe that my bot would just tie most games, likely due to my defense heuristic being a little bit too high.
                    Below is a pdf transcript of an example game, where you can see how my bot performs, as well as the utterances!
                </p>
                <a
                    href="/assets/images/phunt22_kinarowgame.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-download"
                >
                    Download Example Game Transcript
                </a>
            </div>


        </div >
    )
}
