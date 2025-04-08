import { Link } from 'react-router';

export default function Sobre(){
    return (
        <div>
            <p>Você está na página Sobre</p>
            <Link to='/'>Home</Link><br />
            <Link to='/teste'>404</Link><br />
        </div>
    )
}