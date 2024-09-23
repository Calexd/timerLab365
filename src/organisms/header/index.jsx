import { Timer, ScrollText } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import './header.css'

export function Header() {
    return (
        <header className='container--header'>
            <img src='./logo-lab.png' alt='Logotipo do lagb365' width='163' height='41'/>
            <nav>
                <NavLink to="/" end>
                    <Timer size={24} />
                    </ NavLink>
                <NavLink to="/historico" end>
                    <ScrollText size={24} />
                </ NavLink>
            </nav>
        </header>
    )
}