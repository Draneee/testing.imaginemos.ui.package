import React from "react";
import Button from "./Button";

export default {
  title: "Button",
};

const Template = (args) => <Button {...args} />;

export const Modal = Template.bind({});
Modal.args = {
  label: "Add New",
  type: "modal",
};

export const Agree = Template.bind({});
Agree.args = {
  label: "Send Request",
  type: "agree",
};

export const Cancel = Template.bind({});
Cancel.args = {
  label: "Cancel",
  type: "cancel",
};

export const Deny = Template.bind({});
Deny.args = {
  label: "Reject Request",
  type: "deny",
};
