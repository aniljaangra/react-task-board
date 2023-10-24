import useLocalStorage from "./useLocalStorage";

export default function useTasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (task) => {
    const newTasks = [task, ...tasks];
    setTasks(newTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return { tasks, addTask, updateTask, deleteTask };
}
