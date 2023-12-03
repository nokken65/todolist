import './App.css'

function App() {
  return (
    <div className={'App'}>
      <div>
        <h3>What to learn</h3>
        <div>
          <input />
          <button>+</button>
        </div>
        <ul>
          <li>
            <input checked type={'checkbox'} /> <span>HTML&CSS</span>
          </li>
          <li>
            <input checked type={'checkbox'} /> <span>JS</span>
          </li>
          <li>
            <input checked={false} type={'checkbox'} /> <span>React</span>
          </li>
        </ul>
        <div>
          <button>All</button>
          <button>Active</button>
          <button>Completed</button>
        </div>
      </div>
    </div>
  )
}

export default App
