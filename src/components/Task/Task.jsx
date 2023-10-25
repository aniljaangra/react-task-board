import { Card, CardContent, Typography } from "@mui/material";
import dayjs from "dayjs";

export default function Task({ task, onClick }) {
  return (
    <Card onClick={onClick} sx={{ cursor: "pointer" }}>
      <CardContent>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {dayjs(task.deadline).format("DD/MM/YYYY")}
        </Typography>
        <Typography variant="h6" component="div">
          {task.name}
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary" gutterBottom>
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
