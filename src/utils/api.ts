const baseUrl = import.meta.env.VITE_BASE_API_URL;

function addTask({ title }: { title: string }) {
  return fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, completed: false }),
  });
}

function getAllTasks() {
  return fetch(`${baseUrl}/tasks`);
}

function putTask(taskId: string | number, tasks: Task) {
  return fetch(`${baseUrl}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(tasks),
  });
}

export default {
  addTask,
  getAllTasks,
  putTask,
};
