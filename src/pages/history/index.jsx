import { Status } from '../../atoms/status'
import './history.css'

export function HistoryPage() {
   return (
       <div className='container--history'>
             <h1>Meu Histórico</h1>

             <table>
                <thead>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Inicio</th>
                    <th>tarefa</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Conserto de débitos técnicos</td>
                        <td>25 minutos</td>
                        <td>Há cerca de 2 meses</td>
                        <td>
                            <Status>Concluído</Status>
                        </td>
                    </tr>
                </tbody>
             </table>
       </div>
   )
}