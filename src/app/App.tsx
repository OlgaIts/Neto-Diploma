import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { mainRouter } from './router/mainRouter';
import './styles/index.scss';

function App() {
  return <RouterProvider router={createBrowserRouter(mainRouter())} />;
}

export default App;
