export function invertColor(o, e) {
  if (
    (0 === o.indexOf("#") && (o = o.slice(1)),
    3 === o.length && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]),
    6 !== o.length)
  )
    throw new Error("Invalid HEX color.");
  var s = parseInt(o.slice(0, 2), 16),
    r = parseInt(o.slice(2, 4), 16),
    l = parseInt(o.slice(4, 6), 16);
  return e
    ? 0.299 * s + 0.587 * r + 0.114 * l > 186
      ? "#000000"
      : "#FFFFFF"
    : ((s = (255 - s).toString(16)),
      (r = (255 - r).toString(16)),
      (l = (255 - l).toString(16)),
      "#" + Math.padZero(s) + Math.padZero(r) + Math.padZero(l));
}
export function copyColor(o) {
  navigator.clipboard.writeText(o);
}
