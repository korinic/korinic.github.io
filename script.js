let step = 1;

function changeText() {
  const textElement = document.getElementById('text');
  const nextButton = document.getElementById('nextButton');

  switch (step) {
    case 1:
      textElement.textContent = "I know it's not perfect and that it's simple, but it took me 3 weeks to make it.";
      break;
    case 2:
      textElement.textContent = "You are the sweetest and I wanted to be a part of your passion.";
      break;
    case 3:
      textElement.textContent = "I LOVE YOU SO MUCH!! :)"; 
      break; 
    case 4: 
      textElement.textContent = "I hope you enjoyed.... made by Korina, 2023."
      nextButton.style.display = 'none'; // Hide the button after the final text
      break;
  }

  step++;
}