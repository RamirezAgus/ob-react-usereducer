import './App.css'
import { TaskProvider } from './components/TaskContext'
import TaskList from './components/TaskList'

const App = () => {

  return (
    <div className='App'>
      <h1>UseReducer Example</h1>
      <TaskProvider>
        <TaskList/>
      </TaskProvider>
    </div>
  )
}

export default App
