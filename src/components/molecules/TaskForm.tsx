import { Button, Form, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import type { FormInstance } from 'antd'

interface ITaskFormProps {
  loading: boolean
  form: FormInstance
  onFinish: (values: { title: string }) => Promise<void>
}

function TaskForm(props: ITaskFormProps) {
  const { loading, form, onFinish } = props
  return (
    <Form
      form={form}
      onFinish={(values) => void onFinish(values as { title: string })}
      style={{ marginBottom: 20 }}
    >
      <Form.Item
        name="title"
        rules={[
          { required: true, message: 'Please input the task title!' },
          { max: 125, message: 'Title cannot be longer than 125 characters' },
        ]}
      >
        <Input autoFocus placeholder="Enter task title" />
      </Form.Item>
      <Form.Item>
        <Button
          disabled={loading}
          type="primary"
          htmlType="submit"
          icon={<PlusOutlined />}
        >
          Add Task
        </Button>
      </Form.Item>
    </Form>
  )
}
export default TaskForm
