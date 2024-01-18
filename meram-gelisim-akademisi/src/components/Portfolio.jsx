import '../assets/css/Portfolio.css'

function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <div className="portfo-items">
                <div className="item">
                    <div className="img1"></div>
                    <div className="info">
                        <h4>Atölyeler</h4>
                        <p>
                            Atölyeler hakkında bilgi almak için tıklayınız.
                        </p>
                        <a href="#">Daha Fazlası <i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className="item">
                    <div className="img2"></div>
                    <div className="info">
                        <h4>Yaz Okulları</h4>
                        <p>
                        Yaz Okulları hakkında bilgi almak için tıklayınız.
                        </p>
                        <a href="#">Daha Fazlası <i className='bx bx-link-external'></i></a>
                    </div>
                </div>
                <div className="item">
                    <div className="img3"></div>
                    <div className="info">
                        <h4>Yazılım Kampları</h4>
                        <p>
                        Yazılım Kampları hakkında bilgi almak için tıklayınız.
                        </p>
                        <a href="#">Daha Fazlası <i className='bx bx-link-external'></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Portfolio