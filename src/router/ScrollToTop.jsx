import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// export const ScrollToTop = () => {
//     const { pathname } = useLocation();

//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, [pathname]);

//     return null;
// }
export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        let animationFrameId;

        const step = () => {
        if (window.pageYOffset === 0) {
            cancelAnimationFrame(animationFrameId);
            return;
        }

        window.scroll(0, window.pageYOffset - 100);
        animationFrameId = requestAnimationFrame(step);
        };

        animationFrameId = requestAnimationFrame(step);

        return () => {
        cancelAnimationFrame(animationFrameId);
        };
    }, [pathname]);

    return null;
}
