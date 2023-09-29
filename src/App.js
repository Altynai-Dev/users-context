import './App.css';
import MainRoutes from './MainRoutes';
import Navbar from './components/Navbar/Navbar';
import UserContextProvider from './context/UsersContext';

function App() {
  return (
    <>
    <UserContextProvider>
      <Navbar/>
        <MainRoutes/>
    </UserContextProvider>
    </>
  );
}

export default App;
