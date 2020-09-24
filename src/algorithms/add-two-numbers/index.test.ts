import addTwoNumbers, { ListNode } from './index'

describe('Add two numbers', () => {
  test('Input: (2 -> 4 -> 3) + (5 -> 6 -> 4); Output: 7 -> 0 -> 8', () => {
    expect(
      addTwoNumbers(
        new ListNode(2, new ListNode(4, new ListNode(3))),
        new ListNode(5, new ListNode(6, new ListNode(4)))
      )
    ).toStrictEqual(new ListNode(7, new ListNode(0, new ListNode(8))))
  })
})
