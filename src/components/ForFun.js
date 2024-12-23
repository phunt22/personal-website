import React from 'react'
import '../styles/portfolio.css';


export default function ForFun() {
    const funItems = [
        { id: 1, title: 'Album Wall', description: 'Check out my favorites', imageName: undefined },
        { id: 2, title: 'Side quests', description: "See what I'm up to", imageName: undefined },
    ];
    return (
        <section>
            <h2 className='title'>For Fun</h2>
            <div className="portfolio-container">
                <p style={{ textWrap: 'wrap', textAlign: 'left', marginLeft: 20 }}>
                    Coming soon... My whole design portfolio and other projects (2.5 years) were wiped when my computer had to be reset earlier this month :/
                </p>
                {/* {funItems.map((item) => (
                    <div key={item.id} className="portfolio-card">
                        <img
                            src={`../../assets/images/fun/${item?.imageName}`} // Change path to match your fun images
                            alt={item.title}
                            className="portfolio-image"
                        />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))} */}
            </div>
        </section>
    );
}