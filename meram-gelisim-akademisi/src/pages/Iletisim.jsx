import React from 'react'
import '../assets/css/Iletisim.css'

function Iletisim() {
    return (
        <main className="main">
            <header className='headers'>
                <div className="category">MEGA</div>
                <div className="info">
                    <h1 className="title">İletişim Bilgileri</h1>
                </div>
            </header>
            <div className="boxs">
                <div className="box2">
                    <div className="header">
                        <h4>Google Maps</h4>
                    </div>
                    <div className='maps'></div>
                </div>
                <div className="box1">
                    <div className="header">
                        <h4>MEGA Gelişim Akademisi</h4>
                    </div>
                    <div className="text">
                        <tr>
                            <th>Adres</th>
                            <span>:</span>
                            <td>Yenişehir Mh, Şehit Göksel Doğan Cd No:31, 42010 Meram/Konya</td>
                        </tr>
                        <tr>
                            <th>Telefon</th>
                            <span>:</span>
                            <td>(0332) 503 09 69</td>
                        </tr>
                        <tr>
                            <th>E-Posta</th>
                            <span>:</span>
                            <td><a href="mailto:info@meramgelisim.com">info@meramgelisim.com</a></td>
                        </tr>
                        <tr>
                            <th>MeramBel.</th>
                            <span>:</span>
                            <td><a href="https://www.meram.bel.tr/">Web Site</a></td>
                        </tr>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Iletisim