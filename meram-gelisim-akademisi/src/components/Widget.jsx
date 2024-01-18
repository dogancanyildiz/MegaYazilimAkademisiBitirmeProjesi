import '../assets/css/Widget.css'

function Widget() {

    return (

        <div className="right-section">

            <div className="profile">
                <i className='bx bxs-bell'></i>
                <i className='bx bxs-cog'></i>
                <div className="user">
                    <div className="left">
                        <i className='bx bx-user'></i>
                    </div>
                    <div className="right">
                        <h5>Admin</h5>
                    </div>
                </div>
            </div>

            <div className="music-player">
                <div className="top-section">
                    <div className="header">
                        <h5>Hoşgeldiniz Sayın</h5>
                        <h4>Admin</h4>
                    </div>
                    <div className="containerd">
                        <div className="left-info">
                            <div className="pic-gradient"></div>
                            <div className="today-info">
                                <h2>Pazar</h2>
                                <span>11 Nisan 1999</span>
                                <div>
                                    <i className='bx bx-current-location'></i>
                                    <span>Konya</span>
                                </div>
                            </div>
                            <div className="today-weather">
                                <i className='bx bx-sun'></i>
                                <h1 className="weather-temp">
                                    25°C
                                </h1>
                                <h3>Güneşli</h3>
                            </div>
                        </div>

                        <div className="right-info">
                            <ul className="days-list">
                                <li>
                                    <i className='bx bx-cloud'></i>
                                    <span>Pzt</span>
                                    <span className="day-temp">23°C</span>
                                </li>
                                <li>
                                    <i className='bx bx-sun'></i>
                                    <span>Sal</span>
                                    <span className="day-temp">28°C</span>
                                </li>
                                <li>
                                    <i className='bx bx-cloud-rain'></i>
                                    <span>Çar</span>
                                    <span className="day-temp">02°C</span>
                                </li>
                                <li>
                                    <i className='bx bx-cloud-drizzle'></i>
                                    <span>Per</span>
                                    <span className="day-temp">14°C</span>
                                </li>
                            </ul>
                            <div className="soz">
                                <h5>İnsanın en büyük zaferi, kendisini yenmesidir.</h5>
                                <span>~ Friedrich Wilhelm Nietzsche</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Widget