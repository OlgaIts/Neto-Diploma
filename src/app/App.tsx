import { Route, Routes } from 'react-router-dom';
import { routeConfig } from './router/routerConfig';
import { Footer } from '@widgets/ui/Footer';
import './styles/index.scss';

function App() {
  return (
    <>
      <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
