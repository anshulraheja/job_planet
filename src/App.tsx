import { Provider } from 'react-redux';
import { store } from '../store';
import ListPage from './components/ListingPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <ListPage />
      </Provider>
    </>
  );
}

export default App;
