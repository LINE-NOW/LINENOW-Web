import { useEffect, useState, RefObject } from "react";

const useMainNavigation = (ref: RefObject<HTMLDivElement>) => {
  const [isFold, setIsFold] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const mainFixedComponentsHeight = isFold ? 177 : 410;
      const mainBoothListHeight = ref.current?.clientHeight || 0;
      const maxScroll =
        mainFixedComponentsHeight + mainBoothListHeight - window.innerHeight;

      if (currentScrollY > maxScroll) {
        window.scrollTo(0, maxScroll);
        setLastScrollY(maxScroll);
        return;
      }

      if (currentScrollY > lastScrollY) {
        setIsFold(true);
      } else {
        setIsFold(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return isFold;
};

export default useMainNavigation;
