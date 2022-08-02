import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import ErrorComponent from './components/ErrorComponent';

import './App.css';

function App() {
  const logError = (error, errorInfo) => {
    // errorService.log({ error, errorInfo });
    console.log({ error, errorInfo });
  };
  // const myErrorHandler = ()=>{}
  return (
    <Router>
      <ErrorBoundary
        FallbackComponent={<ErrorComponent />}
        onError={logError}
        onReset={() => {}}
      >
        <Header />
      </ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
