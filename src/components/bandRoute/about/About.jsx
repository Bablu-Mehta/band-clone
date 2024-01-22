import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./about.css";
import TeamMember from "./TeamMember";
import { memberData } from "../../../constants";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Modal from "../../ui/Modal";
import { formValidation } from "../../../formValidation";

const About = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  function handleOpenDialog() {
    setOpen(true);
  }

  function handleCloseDialog() {
    setOpen(false);
    setFormSubmitted(false);
  }

  function handleFormSubmit(data) {
    setFormSubmitted(true);
    setOpen(false);
    console.log(data);
    reset();
  }

  const teamMemberListUi = memberData.map((member) => (
    <TeamMember
      key={member.id}
      memberImage={member.memberImage}
      memberName={member.memberName}
      memberDesignation={member.memberDesignation}
      memberDescription={member.memberDescription}
      handleClick={handleOpenDialog}
    />
  ));

  return (
    <>
      <Modal
        open={open}
        onClose={handleCloseDialog}
        onSubmit={handleSubmit}
        actionText="Submit"
      >
        <DialogContent>
          <DialogContentText>
            To Contact Me Please Enter you Details, will Contact with you Within
            48 Hours
          </DialogContentText>
          <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
            <TextField
              margin="dense"
              id="name"
              name="name"
              label="Your Name"
              type="text"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              variant="standard"
              {...register("name")}
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Your Email Address"
              type="email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              variant="standard"
              {...register("email")}
            />
            <TextField
              required
              margin="dense"
              id="message"
              name="message"
              label="Your Message"
              type="text"
              fullWidth
              variant="standard"
              error={!!errors.message}
              helperText={errors.message?.message}
              {...register("message")}
            />
            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button type="submit">Submit</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Modal>
      {formSubmitted && (
        <Modal
          open={formSubmitted}
          onClose={handleCloseDialog}
          onSubmit={handleCloseDialog}
          actionText="Okay"
        >
          <DialogTitle id="alert-dialog-title">
            {"Your Form is Submitted successfully"}
          </DialogTitle>
          <DialogActions>
            <Button type="submit" onClick={handleCloseDialog}>
              Okay
            </Button>
          </DialogActions>
        </Modal>
      )}
      <div className="band-about-container">
        <h1>About</h1>
        <div className="divider-line"></div>
        <p className="band-about-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <div className="band-about-team">{teamMemberListUi}</div>
      </div>
    </>
  );
};

export default About;
