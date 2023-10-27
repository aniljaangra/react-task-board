import useLocalStorage from "./useLocalStorage";

const DEFAULT_TASKS = {
  todo: [
    {
      taskId: 1,
      name: "Task 1",
      column: "todo",
      description: "Dummy Task",
      deadline: new Date(2023, 10, 10),
    },
  ],
  inprogress: [
    {
      taskId: 2,
      name: "Task 2",
      column: "inprogress",
      description: "Dummy Task 2",
      deadline: new Date(2023, 9, 10),
    },
  ],
  done: [
    {
      taskId: 3,
      name: "Task 3",
      column: "done",
      description: "Dummy Task 3",
      deadline: new Date(2023, 8, 10),
    },
  ],
  blocked: [
    {
      taskId: 3,
      name: "Blocked Task",
      column: "blocked",
      description: "Dummy Task",
      deadline: new Date(2023, 8, 10),
    },
  ],
};
export default function useTasks() {
  const [tasksMap, setTasks] = useLocalStorage("tasks", DEFAULT_TASKS);
  const [taskCounter, setTasksCounter] = useLocalStorage(
    "tasks-counter",
    Object.values(tasksMap).flat().length + 1
  );

  const addTask = (task) => {
    const newTasks = { ...tasksMap };
    newTasks[task.column].push({ ...task, taskId: taskCounter });
    setTasksCounter(taskCounter + 1);
    setTasks(newTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = { ...tasksMap };
    updatedTasks[updatedTask.column] = updatedTasks[updatedTask.column].map(
      (task) => {
        if (task.taskId === taskId) {
          return { ...updatedTask, taskId };
        }
        return task;
      }
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId, taskColumn) => {
    const updatedTasks = { ...tasksMap };
    updatedTasks[taskColumn] = updatedTasks[taskColumn].filter((task) => {
      return task.taskId !== taskId;
    });
    setTasks(updatedTasks);
  };
  const addColumn = (columnName) => {
    if (!tasksMap.hasOwnProperty(columnName)) {
      const updatedTasks = { ...tasksMap };
      updatedTasks[columnName] = [];
      setTasks(updatedTasks);
    }
  };
  return { tasks: tasksMap, addTask, updateTask, deleteTask, addColumn };
}
