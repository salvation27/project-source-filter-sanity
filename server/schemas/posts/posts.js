import { MdDashboardCustomize } from "react-icons/md";

export default {
  name: "posts",
  title: "Posts",
  type: "document",
  icon: MdDashboardCustomize,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
    {
      name: "notes",
      title: "Пометки",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "linkProgect",
      title: "Ссылка на проект",
      type: "string",
    },
    {
      name: "linkGit",
      title: "Ссылка на Git",
      type: "string",
    },
    {
      name: "linkYoutybe",
      title: "Ссылка на видео",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 20,
      },
    },
    {
      name: "basis",
      title: "Basis",
      type: "reference",
      to: {
        type: "basis",
      },
    },
    {
      name: "tehnology",
      title: "Tehnology",
      type: "reference",
      to: {
        type: "tehnology",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: {
        type: "category",
        of: "array",
      },
    },
    {
      name: "site",
      title: "Site",
      type: "reference",
      to: {
        type: "site",
      },
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
  ],
};
