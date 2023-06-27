export default function getCropppedImageURL(
  url: string,
  width: number,
  height: number
): string {
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  const output =
    url.substring(0, index) + `crop/${width}/${height}/` + url.substring(index);

  return output;
}
