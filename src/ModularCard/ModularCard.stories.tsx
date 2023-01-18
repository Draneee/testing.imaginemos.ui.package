import React from "react";
import ModularCard from "./ModularCard";

export default {
  title: "ModularCard",
  component: ModularCard,
};

const Template = (args) => <ModularCard {...args} />;

export const Main = Template.bind({});
Main.args = {
  headerPath: ["Path", "Path"],
  headerName: "Header Name",
};
