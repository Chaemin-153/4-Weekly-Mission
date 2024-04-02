import { RefObject, useEffect } from 'react';

function useClickOutside(ref: RefObject<HTMLElement>, callback: () => void) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      if (!ref?.current) return;
      if (ref.current && !ref.current.contains(targetElement)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
}

export default useClickOutside;
