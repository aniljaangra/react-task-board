import { useParams } from "react-router-dom";

export default function TaskDetails() {
  const { taskId } = useParams();
  return (
    <div>
      <h1>TaskDetails , {taskId}</h1>
    </div>
  );
}
