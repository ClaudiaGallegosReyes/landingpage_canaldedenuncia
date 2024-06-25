import { useEffect } from 'react';

const useIntersectionObserver = (selector, className) => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(
                    (entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add(className);
                        }
                    }
                );
            }
        );

        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, [selector, className]);
};

export default useIntersectionObserver;
