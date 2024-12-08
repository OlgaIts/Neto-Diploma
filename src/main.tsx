import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@app/providers/StoreProvider/store';
import App from './app/App';

Object.tsKeys = function getObjectKeys<Obj>(obj: Obj): (keyof Obj)[] {
  return Object.keys(obj!) as (keyof Obj)[];
};

Object.tsValues = Object.values;
Object.tsEntries = Object.entries;

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
}
