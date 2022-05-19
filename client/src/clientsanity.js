import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientSanity = sanityClient({
  projectId: "wr7rnrfz",
  dataset: "production",
  apiVersion: "2022-05-16",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(clientSanity);

export const urlFor = (source) => builder.image(source);
