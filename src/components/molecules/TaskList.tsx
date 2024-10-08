import { Checkbox, List } from 'antd'

interface ITaskListProps {
  loading?: boolean
  data: Task[]
  onChange: (task: Task) => Promise<void>
}

function TaskList(props: ITaskListProps) {
  const { loading, data, onChange } = props
  return (
    <List
      loading={loading}
      dataSource={data}
      renderItem={(task) => (
        <List.Item>
          <Checkbox
            className="label-w-100"
            checked={task.completed}
            onChange={() => {
              void onChange(task)
            }}
            title={task.title}
          >
            <span className="text-overflow-ellipsis" title={task.title}>
              {task.title}
            </span>
          </Checkbox>
        </List.Item>
      )}
    />
  )
}

export default TaskList
