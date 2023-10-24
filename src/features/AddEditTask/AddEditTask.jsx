import { useParams } from "react-router-dom";

export default function AddEditTask() {
  const { taskId } = useParams();
  return (
    <div>
      <h1>AddEditTask </h1>
      {taskId && <h2>Editing task {taskId}</h2>}
    </div>
  );
}
