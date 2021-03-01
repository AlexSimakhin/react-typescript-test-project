import { BrowserRouter } from 'react-router-dom';
import { Routes } from './source/navigation';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
