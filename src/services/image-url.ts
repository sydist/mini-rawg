import imageNotFound from "../assets/image-not-found.webp";

export default function getCropppedImageURL(url: string) {
  if (!url) return imageNotFound;

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const output =
    url.substring(0, index) + `crop/600/400/` + url.substring(index);

  return output;
}
