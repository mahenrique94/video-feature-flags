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
      const newTask = inputRef.current.value
      setTasks(oldTasks => [...oldTasks, newTask])
      inputRef.current.value = ''
    }
  }

  const handleRemoveTask = (position) => {
    setTasks(oldTasks => {
      const tempTasks = [...oldTasks]
      tempTasks.splice(position, 1)
      return tempTasks
    });
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
            {hasDeleteFeature ? <button onClick={() => handleRemoveTask(i)}>Remove</button> : null }
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo
