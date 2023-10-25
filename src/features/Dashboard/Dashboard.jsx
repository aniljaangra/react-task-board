import {
    Button
} from "@mui/material";
import useTasks from "../../hooks/useTasks";
import TaskColumn from "../../components/TaskColumn/TaskColumn";
import Task from "../../components/Task/Task";
import {COLUMN_TITLE} from "../../constants/taskConstants";
import CreateColumn from "../../components/CreateColumn/CreateColumn";
import CreateTask from "../../components/CreateTask/CreateTask";
import {useState} from "react";
import AddEditTask from "../AddEditTask/AddEditTask";

export default function Dashboard() {
    const {tasks, addTask, updateTask, addColumn} = useTasks();
    const [showModal, setShowModal] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);

    const columns = Object.keys(tasks);
    const handleTaskClick = task => {
        setSelectedTask(task);
        setShowModal(true);
    }
    return (
        <div>
            <h1>Dashboard</h1>
            <CreateColumn onAddColumn={addColumn}/>
            {showModal && <AddEditTask task={selectedTask} updateTask={updateTask} column={selectedTask.column}
                                       setShowModal={setShowModal}/>}
            <div className="container">
                {columns.map(status => {
                    return <TaskColumn title={COLUMN_TITLE[status] || status} key={status}>
                        <CreateTask column={status} addTask={addTask} columns={columns}/>
                        <div className="task-list">
                            {tasks[status].map(task => {
                                return <Task task={task} key={task.name} onClick={() => handleTaskClick(task)}/>
                            })}
                        </div>
                    </TaskColumn>
                })}
            </div>
        </div>
    );
}
