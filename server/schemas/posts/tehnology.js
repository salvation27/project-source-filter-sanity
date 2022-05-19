import { MdOutlineMargin } from "react-icons/md";

export default {
  name: "tehnology",
  title: "Tehnology->Posts",
  type: "document",
  icon: MdOutlineMargin,
  fields: [
    {
      name: "label",
      title: "Label",
      type: "string",
    },
    {
      name: "checked",
      title: "Checked",
      type: "boolean",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
