import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const clientSanity = sanityClient({
  projectId: "wr7rnrfz",
  dataset: "production",
  apiVersion: "2022-05-16",
  useCdn: true,
  token:"skvvJ3lxFbknu33mWD3O1kSRLDeJLvzXDezz2u8exYuL0jetlYDDvppfH5ZXTqydBss5EA6B29sIVyDEN0HiZrt8hFtu2lUBN5jkMMneLrZcGU5IJ1Al5cUucAlB19FtG4MW6g2p6XYYWQlGKOZJWU4eVFJppUaiVAlBEoGMh55Lj7jxbkrU",
});

const builder = imageUrlBuilder(clientSanity);

export const urlFor = (source) => builder.image(source);
