import { Route, Routes } from 'react-router-dom'
import AnaSayfa from './pages/AnaSayfa'
import Hakkimizda from './pages/Hakkimizda'
import Iletisim from './pages/Iletisim'


function SiteRoutes() {
    return (
        <Routes>
            <Route path='/' element={<AnaSayfa />} />
            <Route path='/hakkimizda' element={<Hakkimizda />} />
            <Route path='/iletisim' element={<Iletisim />} />
        </Routes>
    )
}

export default SiteRoutes