// 随机数
export const randomNum = (min: number, max: number): number => {
  return parseInt((Math.random() * (max - min + 1) + min).toString(), 10)
}
// 随机颜色
export const randomColor = (min: number, max: number): string => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
