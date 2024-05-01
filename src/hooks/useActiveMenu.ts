import { useLocation } from 'react-router-dom';

const useActiveMenu = () => {
  const router = useLocation();
  const isActive = (path: string) => {
    if (router.pathname === path) {
      return true;
    }
    return false;
  };

  return { isActive };
};

export default useActiveMenu;
