module.exports = (componentName) => ({
  content: `
import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}",
    component: ${componentName}
};

const Template = (args) => <${componentName} {...args} />;

export const Main = Template.bind({});
Main.args = {

};

`,
  extension: `.stories.tsx`,
});
