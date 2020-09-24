/**
 * Approach 1: Brute Force
 * Approach 2: Two-pass Hash Table
 * Approach 3: One-pass Hash Table
 * @param nums
 * @param target
 */
export default function twoSum(nums: number[], target: number): number[] {
  const map: { [key: number]: number } = {}
  for (let index = 0; index < nums.length; index++) {
    if (map[nums[index]] >= 0) {
      return [map[nums[index]], index]
    }
    map[target - nums[index]] = index
  }
  return []
}
