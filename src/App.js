import './App.css'
import Header from './Components/Header'
import Notes from './Components/Notes'

function App() {

  return (
    <div className='main'>
           {/** Header component simple  html used to display the header*/}
      <Header /> 
            {/** Main component that displays notes */}
      <Notes />
    </div>
  )
}

export default App

