
import {Outlet} from 'react-router-dom'
import {Header} from '../organisms/header/index'
import './template.css'

export function Layout() {

    return (
        <>
            <Header />
            <main className='container--template'>
            <div className='container--template-contents'>
                <Outlet />
            </div>
            </main>
        </>
    )
}

