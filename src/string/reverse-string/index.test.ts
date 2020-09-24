import reserveString from './index'
describe('Reserve string', () => {
  test('Input: ["h","e","l","l","o"]; Output: ["o","l","l","e","h"]', () => {
    let s = ['h', 'e', 'l', 'l', 'o']
    reserveString(s)
    expect(s).toStrictEqual(['o', 'l', 'l', 'e', 'h'])
  })

  test('Input: ["H","a","n","n","a","h"]; Output: ["h","a","n","n","a","H"]', () => {
    let s = ['H', 'a', 'n', 'n', 'a', 'h']
    reserveString(s)
    expect(s).toStrictEqual(['h', 'a', 'n', 'n', 'a', 'H'])
  })
})
