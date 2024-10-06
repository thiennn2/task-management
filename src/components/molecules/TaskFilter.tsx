import { Radio } from "antd";
import type { RadioChangeEvent } from "antd";
import { TASK_FILTER } from "../../utils/constants";

interface ITaskFilterProps {
  value: any;
  onChange: (e: RadioChangeEvent) => void;
}

function TaskFilter(props: ITaskFilterProps) {
  const { value, onChange } = props;
  return (
    <Radio.Group
      value={value}
      onChange={onChange}
      className="mb-5"
    >
      <Radio.Button value={TASK_FILTER.All}>All</Radio.Button>
      <Radio.Button value={TASK_FILTER.COMPLETED}>Completed</Radio.Button>
      <Radio.Button value={TASK_FILTER.INCOMPLETE}>Incomplete</Radio.Button>
    </Radio.Group>
  );
}
export default TaskFilter;
