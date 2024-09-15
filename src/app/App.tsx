import { Route, Routes, useLocation } from 'react-router-dom';
import { routeConfig } from './router/routerConfig';
import { Footer } from '@widgets/Footer';
import './styles/index.scss';

function App() {
  const location = useLocation();
  const allPaths = Object.values(routeConfig).map(({ path }) => path);
  const isPathValid = allPaths.includes(location.pathname);

  return (
    <>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes>
      {isPathValid ? <Footer /> : null}
    </>
  );
}

export default App;
