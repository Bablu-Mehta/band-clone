import React, { useState } from "react";
import "./about.css";
import TeamMember from "./TeamMember";
import { memberData } from "../../../constants";
import {
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import Modal from "../../ui/Modal";

const About = () => {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleOpenDialog() {
    setOpen(true);
  }

  function handleCloseDialog() {
    setOpen(false);
    setFormSubmitted(false);
  }

  function handleSubmit() {
    setFormSubmitted(true);
    setOpen(false);
  }

  const formSubmissionMessage = (
    <Modal
      open={formSubmitted}
      onClose={handleCloseDialog}
      onSubmit={handleCloseDialog}
      actionText="Okay"
    >
      <DialogTitle id="alert-dialog-title">
        {"Your Form is Submitted successfully"}
      </DialogTitle>
    </Modal>
  );

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
          <TextField
            required
            margin="dense"
            id="name"
            name="name"
            label="Your Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            required
            margin="dense"
            id="email"
            name="email"
            label="Your Email Address"
            type="email"
            fullWidth
            variant="standard"
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
          />
        </DialogContent>
      </Modal>
      {formSubmitted && formSubmissionMessage}
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
