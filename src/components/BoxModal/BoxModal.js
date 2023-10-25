import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};
export default function BoxModal({ children, ...props }) {
  return (
    <Modal {...props}>
      <Box sx={style}>{children}</Box>
    </Modal>
  );
}
