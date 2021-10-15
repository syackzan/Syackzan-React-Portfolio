import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './componenets/pages/About';
import Portfolio from './componenets/pages/Portfolio';
import Resume from './componenets/pages/Resume';
import Contact from './componenets/pages/Contact';

function App () {
    const [currentPage, setCurrentPage] = useState('About')

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />;
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />;
        }
        if (currentPage === "Resume"){
            return <Resume />;
        }
        return <Contact />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div className="">
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}

export default App;