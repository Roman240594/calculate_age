const calculateAgeBtn = document.getElementById('calculateAge');
const birthdateInput = document.getElementById('birthdate');
const result = document.getElementById('result');

function calculateAge() {
    const birthdate = new Date(birthdateInput.value);
    if (isNaN(birthdate.getTime())) {
        result.textContent = 'Введіть, будь ласка, свою дату народження';
        result.style.color = 'red';
        return;
    }
    const now = new Date();
    const ageInMilliseconds = now - birthdate;
    const ageDate = new Date(ageInMilliseconds);
    const years = ageDate.getUTCFullYear() - 1970;
    const months = ageDate.getUTCMonth();
    const days = ageDate.getUTCDate() - 1;
    result.textContent = `Вам ${years} років, ${months} місяців і ${days} днів`;
    result.style.color = 'black';
}

calculateAgeBtn.addEventListener('click', calculateAge);
birthdateInput.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        calculateAge();
    }
});