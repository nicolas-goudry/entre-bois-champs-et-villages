export function hexToRgb(hex, alpha) {
  const hasAlpha = alpha >= 0 && alpha <= 1
  const fn = hasAlpha ? 'rgba' : 'rgb'
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const red = parseInt(result[1], 16)
  const green = parseInt(result[2], 16)
  const blue = parseInt(result[3], 16)

  return result ? `${fn}(${red}, ${green}, ${blue}${hasAlpha ? `, ${alpha}` : ''})` : null
}
