import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@app/providers/StoreProvider/store';
import App from './app/App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
  );
}