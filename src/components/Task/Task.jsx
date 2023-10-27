import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import dayjs from "dayjs";

export default function Task({ task, onClick, onDelete }) {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {dayjs(task.deadline).format("DD/MM/YYYY")}
        </Typography>
        <Typography
          onClick={onClick}
          variant="h6"
          component="div"
          sx={{ cursor: "pointer" }}
        >
          {task.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {task.description}
        </Typography>
        <Button
          sx={{
            cursor: "pointer",
            fontSize: "0.6rem",
            fontWeight: "bold",
          }}
          onClick={onClick}
        >
          Update Task
        </Button>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            cursor: "pointer",
            fontSize: "0.6rem",
          }}
          onClick={() => onDelete(task.taskId, task.column)}
        >
          remove
        </Button>
      </CardActions>
    </Card>
  );
}
