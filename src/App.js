import Header from './components/Header';
import { ContextProvider } from './context';
import Shop from './components/Shop';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;
