import {useState,useEffect} from 'react';

export default function useMobile() {

  const [isMobile, setIsMobile] = useState(false);

  const updateDimensions = () => {
    setIsMobile(window.innerWidth < 500);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  return isMobile
}