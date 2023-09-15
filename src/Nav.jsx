import {} from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav() {
  

return (
    <>
        
        <Link to="Contextualizacao">Contextualização</Link>

        <nav>

        <div className="nav-container">

            <Link to="/">Otoko Tekhne Nashi</Link>

            <div className="barra">


                <div className="itens">
                    <ul>
                        <li><Link to="/">Otoko Tekhne Nashi</Link></li>
                        <li><Link to="/Contextualização">Contextualização</Link></li>
                        <li><Link to="/">Otoko Tekhne Nashi</Link></li>
                        <li><Link to="/">Otoko Tekhne Nashi</Link></li>
                        <li><Link to="/">Otoko Tekhne Nashi</Link></li>
                        <li><Link to="/">Otoko Tekhne Nashi</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    </nav>
    </>
)
}
  
  export default Nav
  