const userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split('T')[0];

const result = document.getElementById('result');

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const today = new Date();

  let day = today.getDate() - birthDate.getDate();
  let month = today.getMonth() - birthDate.getMonth();
  let year = today.getFullYear() - birthDate.getFullYear();

  if (day < 0) {
    month--;
    day += getDaysInMonth(today.getFullYear(), today.getMonth() - 1);
  }

  if (month < 0) {
    year--;
    month += 12;
  }

  result.textContent = `You are ${year} years, ${month} months, and ${day} days old.`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
