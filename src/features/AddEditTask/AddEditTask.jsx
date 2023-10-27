import { useState } from "react";
import BoxModal from "../../components/BoxModal/BoxModal";
import { Button, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function AddEditTask({
  column,
  addTask,
  updateTask,
  task,
  setShowModal,
}) {
  const [taskName, setTaskName] = useState(task?.name || "");
  const [taskDescription, setTaskDescription] = useState(
    task?.description || ""
  );
  const [deadline, setDeadline] = useState(task?.deadline || null);
  const handleSubmit = () => {
    if (taskName && taskDescription && deadline) {
      if (task) {
        updateTask(task.taskId, {
          name: taskName,
          description: taskDescription,
          column,
          deadline,
        });
      } else {
        addTask({
          name: taskName,
          description: taskDescription,
          column,
          deadline,
        });
      }
      setShowModal(false);
    }
  };
  return (
    <BoxModal open>
      <Typography variant="h6" className="add-task-title">
        {task ? "Update" : "Add"} Task
      </Typography>
      <section className="task-form">
        <TextField
          fullWidth
          required
          value={taskName}
          label="Task Name"
          onChange={(e) => setTaskName(e.target.value)}
        />
        <TextField
          fullWidth
          required
          value={taskDescription}
          label="Task Description"
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disablePast={true}
            value={dayjs(deadline)}
            onChange={(v) => setDeadline(v.toString())}
          />
        </LocalizationProvider>

        <Button
          variant="contained"
          size="large"
          fullWidth
          data-testid={`${task ? "update" : "add"}-task`}
          onClick={handleSubmit}
          disabled={!taskName || !taskDescription || !deadline}
        >
          {task ? "Update" : "Add"} Task
        </Button>
      </section>
    </BoxModal>
  );
}
