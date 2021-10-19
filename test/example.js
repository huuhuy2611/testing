// load unit.js
var test = require("unit.js");

// load file test

var data = require("./test-case.json");

// function

function checkQuadraticEquation(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "INPUT KHÔNG HỢP LỆ";
  }
  if (a < 0 || a > 10 || b < 0 || b > 10 || c < 0 || c > 10) {
    return "INPUT KHÔNG HỢP LỆ";
  }
  if (a === 0) {
    return "KHÔNG PHẢI PHƯƠNG TRÌNH BẬC 2";
  }
  const delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0) {
    return "VÔ NGHIỆM";
  }
  if (delta === 0) {
    return "NGHIỆM KÉP";
  }
  return "HAI NGHIỆM";
}

// testing

describe("Testing with boundary", function () {
  const testCases = data.boundary.cases;
  const expected = data.boundary.expected;
  for (let index in testCases) {
    it(`Test with ${testCases[index].A}, ${testCases[index].B}, ${testCases[index].C}`, function () {
      test
        .string(
          checkQuadraticEquation(
            testCases[index].A,
            testCases[index].B,
            testCases[index].C
          )
        )
        .is(expected[index]);
    });
  }
});

describe("Testing with equivalence class", function () {
  const testCases = data.equivalence_class.cases;
  const expected = data.equivalence_class.expected;
  for (let index in testCases) {
    it(`Test with ${testCases[index].A}, ${testCases[index].B}, ${testCases[index].C}`, function () {
      test
        .string(
          checkQuadraticEquation(
            testCases[index].A,
            testCases[index].B,
            testCases[index].C
          )
        )
        .is(expected[index]);
    });
  }
});
