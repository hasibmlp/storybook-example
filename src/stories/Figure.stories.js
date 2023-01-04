import Figure from "./Figure";

export default {
  title: "figure",
  componet: Figure,
};

const Template = (args) => <Figure {...args} />;

const Primary = Template.bind({});
Primary.args = {};
