import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CountProvider } from './hooks/count-context';
import { BrowserRouter } from 'react-router-dom';
// import { Sample } from './components/Sample';
// import { Color } from './components/Color';
// import { Parent } from './components/Parent';

// const showApp = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <CountProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CountProvider>
    {/* <Parent /> */}
    {/* <Color /> */}
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
