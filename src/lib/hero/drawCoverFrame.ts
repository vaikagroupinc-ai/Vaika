/**
 * Deterministic cover-crop renderer for the architectural villa frame sequence.
 * Preserves the extracted 1600x892 aspect ratio while anchoring focus on the villa facade.
 */
export function drawCoverFrame(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  cssWidth: number,
  cssHeight: number,
  focalX = 0.5,
  focalY = 0.48
): boolean {
  const imgWidth = image.naturalWidth || image.width;
  const imgHeight = image.naturalHeight || image.height;

  if (!imgWidth || !imgHeight || cssWidth <= 0 || cssHeight <= 0) {
    return false;
  }

  const scale = Math.max(cssWidth / imgWidth, cssHeight / imgHeight);
  const drawWidth = imgWidth * scale;
  const drawHeight = imgHeight * scale;

  const offsetX = (cssWidth - drawWidth) * focalX;
  const offsetY = (cssHeight - drawHeight) * focalY;

  ctx.clearRect(0, 0, cssWidth, cssHeight);
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  return true;
}

