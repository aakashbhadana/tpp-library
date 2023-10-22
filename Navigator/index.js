import React, {useEffect, useState} from 'react';
import Breadcrumbs from '../Breadcrumbs';
import { useLocation } from 'react-router-dom';

function Navigator() {

    const {pathname} = useLocation()
    const [Pages, setPages] = useState([]);
    const base = 'app'

    useEffect(() => {
        let pages = pathname.split('/')
        pages = pages.filter(page => page !== base)
        setPages(pages)
    }, [pathname]);

    const navigateToPage = (page) => {
        
        const index = Pages.lastIndexOf(page)
        const path = []

        Pages.forEach(pg => {
            if(Pages.indexOf(pg) <= index){
                path.push(pg)
            }
        });
        return '/' + base + path.join('/')
    }

    return (
        <>
        <Breadcrumbs crumbs={Pages.map(page=>{
            return {label: page, route: navigateToPage(page)}
        })}/>
        </>
    );
}

export default Navigator;