export default function reverseString(s: string[]): void {
  for (let index = 0; index < s.length / 2; index++) {
    let temp = s[index]
    s[index] = s[s.length - 1 - index]
    s[s.length - 1 - index] = temp
  }
}
