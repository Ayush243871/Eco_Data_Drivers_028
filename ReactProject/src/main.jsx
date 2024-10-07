import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store'; // Adjust the path if necessary
import App from './App';
import "../src/index.css" 
import { ChakraProvider } from '@chakra-ui/react';
import { FoodProvider } from './Components/context/FoodContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
import Modal from 'react-modal';
Modal.setAppElement('#root');
root.render(
<ChakraProvider>




  <Provider store={store}>

    <FoodProvider>
    <App />
    </FoodProvider>
 
  </Provider>
  </ChakraProvider>
);
