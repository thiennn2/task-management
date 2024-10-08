import React, { useEffect, useState } from 'react'
import TaskFilter from '../molecules/TaskFilter'
import TaskForm from '../molecules/TaskForm'
import TaskList from '../molecules/TaskList'
import api from '../../utils/api'
import { Form, message } from 'antd'
import { TASK_FILTER } from '../../utils/constants'

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<TASK_FILTER>(TASK_FILTER.All)
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const fetchTasks = async () => {
    try {
      setLoading(true)
      const response = await api.getAllTasks()
      const data: unknown = await response.json()
      if (Array.isArray(data)) {
        setTasks(data)
      }
    } catch (error) {
      console.error(error)
      message.error('Failed to fetch tasks')
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (values: { title: string }) => {
    try {
      setLoading(true)
      const response = await api.addTask({ title: values.title })
      const newTask: unknown = await response.json()
      if (newTask) {
        setTasks([...tasks, newTask] as Task[])
      }
      form.resetFields()
      message.success('Task added successfully')
    } catch (error) {
      console.error(error)
      message.error('Failed to add task')
    } finally {
      setLoading(false)
    }
  }

  const toggleTaskCompletion = async (task: Task) => {
    try {
      setLoading(true)
      const updatedTask = { ...task, completed: !task.completed }
      await api.putTask(task.id, updatedTask)
      const newTasks = tasks.map((t) => (t.id === task.id ? updatedTask : t))
      setTasks(newTasks)
      message.success('Task updated successfully')
    } catch (error) {
      console.error(error)
      message.error('Failed to update task')
    } finally {
      setLoading(false)
    }
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === TASK_FILTER.COMPLETED) return task.completed
    if (filter === TASK_FILTER.INCOMPLETE) return !task.completed
    return true
  })

  useEffect(() => {
    void fetchTasks()
  }, [])

  return (
    <div className="pa-5 my-0 mx-auto task-manager">
      <h1>Task Manager</h1>
      <TaskForm loading={loading} form={form} onFinish={addTask} />
      <TaskFilter
        value={filter}
        onChange={(e) => setFilter(e.target.value as TASK_FILTER)}
      />
      <TaskList
        loading={loading}
        data={filteredTasks}
        onChange={toggleTaskCompletion}
      />
    </div>
  )
}

export default TaskManager
