import { Button, Dialog, DialogActions } from "@mui/material";

export default function Modal({
  children,
  open,
  onClose,
  onSubmit,
  actionText,
}) {
  return (
    <Dialog open={open} onClose={onClose}>
      {children}
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        <Button type="submit" onClick={onSubmit}>
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
