import '../assets/css/Sidebar.css'

function Sidebar() {

  return (

    <aside className="sidebar">

      <div className="logo">
      </div>

      <div className="menu">
        <h5>Atölyeler</h5>
        <ul>
          <li>
            <i className='bx bxs-bolt-circle'></i>
            <a href="#">Akıl ve Zeka</a>
          </li>
          <li>
            <i className='bx bxs-volume-full'></i>
            <a href="#">Bilim ve Fen</a>
          </li>
          <li>
            <i className='bx bx-math'></i>
            <a href="#">Cebir</a>
          </li>
          <li>
            <i className='bx bxs-microphone'></i>
            <a href="#">Diksiyon</a>
          </li>
          <li>
            <i className='bx bxl-graphql' ></i>
            <a href="#">Sanat</a>
          </li>
          <li>
            <i className='bx bx-bug-alt' ></i>
            <a href="#">Robotik Kodlama</a>
          </li>
          <li>
            <i className='bx bxs-radio'></i>
            <a href="#">İngilizce</a>
          </li>
        </ul>
      </div>

      <div className="menu">
        <h5>Etkinlikler</h5>
        <ul>
          <li>
            <i className='bx bx-undo'></i>
            <a href="#">BilFest</a>
          </li>
          <li>
            <i className='bx bx-football' ></i>
            <a href="#">Futbol</a>
          </li>
          <li>
            <i className='bx bxs-chess' ></i>
            <a href="#">Satranç</a>
          </li>
          <li>
            <i className='bx bxl-mongodb' ></i>
            <a href="#">Doğa</a>
          </li>

        </ul>
      </div>

      <div className="menu">
        <h5>Yazılım Eğitimleri</h5>
        <ul>
          <li>
            <i className='bx bx-code' ></i>
            <a href="#">Çocuklar İçin Yazılım</a>
          </li>
          <li>
            <i className='bx bx-code-alt' ></i>
            <a href="#">Gençler İçin Yazılım</a>
          </li>
          <li>
            <i className='bx bx-code-curly' ></i>
            <a href="#">Yetişkinler İçin Yazılım</a>
          </li>
          <li>
            <i className='bx bx-code-block' ></i>
            <a href="#">Proje Destek</a>
          </li>

        </ul>
      </div>

      <div className="playing">
        <div className="top">
          <div className="me"></div>
          <p>Desing by</p>
          <h4>Doğan Can<br />YILDIZ</h4>
        </div>
        <div className="bottom">
          <i className='bx bx-copyright'></i>
          <p>Her Hakkı Saklıdır!</p>
        </div>
      </div>

    </aside>
  )
}

export default Sidebar