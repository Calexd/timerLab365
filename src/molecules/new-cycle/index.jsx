import './new-cycle.css'

export function NewCycle(){
    return( 
        <div className='container--new-cycle'>
            <label htmlFor='task'>Vou trabalhar em</label>
            <input type='text' id='task' placeholder='criar timer 365'/>

            <label htmlFor="minutesAmount">Durante</label>
            <input type="number"></input>
            <span>minutos.</span>
        </div>
    )
}