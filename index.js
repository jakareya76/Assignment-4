function calculateMoney(ticketSale) {
  if (ticketSale <= 0) {
    return "Invalid Number";
  }

  const ticketPrice = 120;
  const GatemanSalary = 500;
  const employeeLunchCost = 50;
  const employeeCount = 8;

  const output =
    ticketSale * ticketPrice -
    (GatemanSalary + employeeCount * employeeLunchCost);

  return output;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }

  let lowerCaseName = name.toLowerCase();

  const goodNameLastCharacter = ["a", "y", "i", "e", "o", "u", "w"];

  let lastCharacter = lowerCaseName.split("").pop();

  if (goodNameLastCharacter.includes(lastCharacter)) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

function deleteInvalids(array) {
  if (!Array.isArray(array)) {
    return "Invalid Array";
  }

  const newArray = [];

  for (number of array) {
    if (typeof number === "number" && !isNaN(number)) {
      newArray.push(number);
    }
  }

  return newArray;
}

function password(obj) {
  if (obj.birthYear.toString().length < 4) {
    return "invalid";
  }

  if (!obj.name || !obj.birthYear || !obj.siteName) {
    return "invalid";
  }

  const name = obj.name;
  const birthYear = obj.birthYear;
  const siteName = obj.siteName;

  const CapitalizeSiteName =
    siteName.charAt(0).toUpperCase() + siteName.slice(1);

  const newPassword = CapitalizeSiteName + "#" + name + "@" + birthYear;
  return newPassword;
}

function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let monthlyEarning = 0;
  let taxableMoney = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      taxableMoney = arr[i];
    }

    if (arr[i] < 3000) {
      monthlyEarning = monthlyEarning + arr[i];
    }
  }

  const taxAmount = (20 * taxableMoney) / 100;
  const total = taxableMoney - taxAmount + monthlyEarning;
  const savings = total - livingCost;

  if (savings < 0) {
    return "earn more";
  }

  return savings;
}
