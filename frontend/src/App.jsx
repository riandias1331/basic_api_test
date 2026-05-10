import Header from './components/Header'
import Card from './components/Card'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
    return (
        <div>
            <Header />

            <Home />

            <div className="cards-container">
                <Card
                    title="React"
                    description="Biblioteca JavaScript para interfaces"
                />

                <Card
                    title="Vite"
                    description="Build tool moderna e rápida"
                />
            </div>

            <Footer />
        </div>
    )
}

export default App