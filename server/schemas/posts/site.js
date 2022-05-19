import { MdShopTwo } from "react-icons/md";

export default {
  name: "site",
  title: "Site->Posts",
  type: "document",
  icon: MdShopTwo,
  fields: [
    {
      description: "Категория тип сайта",
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
