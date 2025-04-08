import { Link } from 'react-router';

export default function Outras(){
    return (
        <div>
            <p>Você está na página 404</p>
            <Link to='/'>Home</Link><br />
            <Link to='/sobre'>Sobre</Link><br />
        </div>
    )
}