import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="outer-container">
      <div className="container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  )
}

export default App
