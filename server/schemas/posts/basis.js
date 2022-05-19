import { MdOutlinePrecisionManufacturing } from "react-icons/md";

export default {
  name: "basis",
  title: "Basis->Posts",
  type: "document",
  icon: MdOutlinePrecisionManufacturing,
  fields: [
    {
      description: "Категория основа",
      name: "name",
      title: "Name",
      type: "string",
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
