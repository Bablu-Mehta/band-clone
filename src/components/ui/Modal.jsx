import { Button, Dialog, DialogActions } from "@mui/material";

export default function Modal({
  children,
  open,
  onClose,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}  
    </Dialog>
  );
}
