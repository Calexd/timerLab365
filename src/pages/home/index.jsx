 import {Timer} from '../../atoms/timer/index'
 import { NewCycle } from '../../molecules/new-cycle'
 import { Button } from '../../atoms/button'

 import './home.css'
 
 export function HomePage() {
    return (
        <div className='container--home'>
            <NewCycle/>
            <Timer />
            <Button> Começar </Button>
        </div>
    )
}