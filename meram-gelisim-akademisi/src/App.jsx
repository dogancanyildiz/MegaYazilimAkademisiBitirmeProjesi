import Sidebar from './components/Sidebar'
import Widget from './components/Widget'
import Navbar from './components/Navbar'
import SiteRoutes from './SiteRoutes'


function App() {

  return (

    <div className='container'>
      <Sidebar />
      <main className='main'>
        <Navbar />
        <SiteRoutes />
      </main>
      <Widget />
    </div>

  )
}

export default App
