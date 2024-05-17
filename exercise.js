// 
function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  // Menemukan kandidat elemen mayoritas
  for (let i = 0; i < nums.length; i++) {
    // Jika count bernilai 0, tentukan kandidat baru
    if (count === 0) {
      candidate = nums[i];
    }
    // Jika elemen saat ini sama dengan kandidat, tambahkan count
    // Jika tidak, kurangi count
    count += (nums[i] === candidate) ? 1 : -1;
  }

  // Kandidat yang ditemukan adalah elemen mayoritas
  return candidate;
}
let nums1 = [3, 2, 3];
console.log(majorityElement(nums1))

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2))
console.log("=============")

/// Romawi
function romanToInt(s) {
    const romanMap = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
    };
    let total = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const currentValue = romanMap[s[i]];
  
      // Jika nilai saat ini lebih kecil dari nilai sebelumnya, kurangi dari total
      if (currentValue < prevValue) {
        total -= currentValue;
      } else {
        // Jika tidak, tambahkan ke total
        total += currentValue;
      }
      // Perbarui nilai sebelumnya
      prevValue = currentValue;
    }
  
    return total;
  }
  console.log(romanToInt("III"))
  console.log(romanToInt("XL"))
  console.log(romanToInt("MCMXCIV"))
  console.log("=============")

  // Segitia Pascal
  function generatePascalTriangle(numRows) {
    const result = []
  
    for (let i = 0; i < numRows; i++) {
      const row = [1]
  
      for (let j = 1; j < i; j++) {
        row.push(result[i - 1][j - 1] + result[i - 1][j])
      }
      if (i > 0) {
        row.push(1)
      }
      result.push(row)
    }
    return result
  }
  
  function printPascalTriangle(triangle) {
    const numRows = triangle.length
    const maxLength = triangle[numRows - 1].length
  
    for (let i = 0; i < numRows; i++) {
      // Hitung spasi di depan setiap baris untuk membuat tampilan segitiga
      const spaces = ' '.repeat((maxLength - triangle[i].length) * 2)
  
      // Gabungkan elemen dalam baris dengan spasi di antaranya
      const rowStr = triangle[i].join('   ')
  
      // Cetak baris dengan spasi yang telah dihitung sebelumnya
      console.log(spaces + rowStr)
    }
  }
  
  // Fungsi untuk mencetak versi array dari Pascal's Triangle
  function printPascalTriangleArray(triangle) {
    console.log("Versi Array:")
    for (let i = 0; i < triangle.length; i++) {
      console.log(triangle[i])
    }
  }
  const numRows = 5
  const pascalTriangle = generatePascalTriangle(numRows)
  console.log("")
  printPascalTriangleArray(pascalTriangle)
  printPascalTriangle(pascalTriangle)
  console.log("")
  const numRows2 = 1
  const pascalTriangle2 = generatePascalTriangle(numRows2)
  console.log("")
  printPascalTriangleArray(pascalTriangle2)
  printPascalTriangle(pascalTriangle2)
  console.log("")
  
  
// Profit
function maxProfit(prices) {

    let maxProfit = 0;
    let minPrice = Infinity;
  
for (let i = 0; i < prices.length; i++) {

    if (prices[i] < minPrice) {
        minPrice = prices[i];
      }
      const profit = prices[i] - minPrice

      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
    return maxProfit;
  }
  const prices1 = [7, 1, 5, 3, 6, 4]
  console.log(maxProfit(prices1))

  const prices2 = [7, 6, 4, 3, 1]
  console.log(maxProfit(prices2))
  
  
  
