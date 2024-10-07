import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainRouter } from './router/mainRouter';
import './styles/index.scss';

function App() {
  // const location = useLocation();
  // const allPaths = Object.values(routeConfig).map(({ path }) => path);
  // const isPathValid = allPaths.includes(location.pathname);

  return (
    <>
      {/* <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
          <Route element={element} path={path} key={path} />
        ))}
      </Routes> */}
      <RouterProvider router={createBrowserRouter(mainRouter())} />
      {/* {isPathValid && <Footer />} */}
    </>
  );
}

export default App;
