import { useRef, useState } from 'react'
import { useFeatureFlags } from './FeatureFlags'

const Todo = () => {
  const hasPersistFeature = useFeatureFlags('save-todo', 'update-todo')
  const hasDeleteFeature = useFeatureFlags('delete-todo')
  const [tasks, setTasks] = useState([])
  const inputRef = useRef()

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value.trim().length > 0) {
      setTasks(oldTasks => [...oldTasks, inputRef.current.value])
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input ref={inputRef} />
        {hasPersistFeature ? <button>Add</button> : null}
      </form>
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>
            {task}
            {hasDeleteFeature ? <button>Remove</button> : null }
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
