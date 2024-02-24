import Footer from "./components/Footer"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import TodoList from "./components/TodoList"

function App() {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navbar/>

      <div className="w-full max-w-4xl shadow-lg rounded-lg p-6 bg-white">
        <Header/>
        <div className="mt-6">
          <TodoList/>
        </div>
        <div className="mt-6">
          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
