import { Outlet } from 'react-router';

import Timer from './components/Timer';

export default function Layout(){
    return(
        <>
            <Timer />
            <Outlet />
        </>
    )
}