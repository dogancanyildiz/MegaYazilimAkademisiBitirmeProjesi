import React from 'react'
import '../assets/css/AnaSayfa.css'
import Portfolio from '../components/Portfolio'

function AnaSayfa() {

    return (

        <main className='main'>
            
            <header className='headerss'>
                <div className="category">MEGA</div>
                <div className="info">
                    <h1 className="title">Meram Gelişm Akademisi</h1>
                </div>
            </header>
            <Portfolio />
        </main>

    )
}

export default AnaSayfa