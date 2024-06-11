function calculateAge() {
  const dateInput = document.getElementById("date").value;
  const resultElement = document.getElementById("result");

  if (!dateInput) {
    resultElement.innerHTML = "Please enter a valid date.";
    return;
  }

  const birthDate = new Date(dateInput);
  const today = new Date();
  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth();
  const birthDay = birthDate.getDate();

  let ageYears = today.getFullYear() - birthYear;
  let ageMonths = today.getMonth() - birthMonth;
  let ageDays = today.getDate() - birthDay;

  if (ageDays < 0) {
    ageMonths--;
    ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (ageMonths < 0) {
    ageYears--;
    ageMonths += 12;
  }

  resultElement.innerHTML = `You are <span>${ageYears}</span> years, <span>${ageMonths}</span> months and <span>${ageDays}</span> days old.`;
}
