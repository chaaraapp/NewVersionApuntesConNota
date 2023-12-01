import { useLocation } from 'react-router';
import { useEffect } from 'react';

const useResetScroll = (router) => {

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

    }, [router.pathname]);

}

// Thats to Reset the scroll to zero when user change the route
export default function ScrollReset() {

    const router = useLocation();

    useResetScroll(router);

    return null;
}
