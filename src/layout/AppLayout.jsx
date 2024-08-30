import { Outlet } from 'react-router-dom'
import NavBar from '../components/common/NavBar'
import Footer from '../components/Footer/Footer'

export default function AppLayout() {
    return (
        <div className='min-vh-100 w-full'>
            <NavBar />

            <div className='container flex flex-col max-w-[1220px] mx-auto gap-y-4 bg-white'>
                <Outlet />
            </div>

            {/* <Footer /> */}
        </div>
    )
}