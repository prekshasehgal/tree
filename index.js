document.getElementById('darkmode-toggle').addEventListener('change', function() {
    document.querySelector('.toggleBtn').style.backgroundColor = this.checked ? 'black' : 'white';
});







const words = ["Developer", "Designer", "Creator", "Innovator", "Preksha"];
const dynamicElement = document.querySelector(".dynamic");
let wordIndex = 0;

dynamicElement.textContent ="Preksha"

const longestWordLength = Math.max(...words.map(word => word.length));

// Update the @keyframes rule
const style = document.createElement('style');
style.innerHTML = `
  @keyframes dynamic {
    0%, 100% {
      width: 0;
    }
    50%, 80% {
      width: ${longestWordLength}ch;
    }
  }
`;
document.head.appendChild(style);




setInterval(() => {
  dynamicElement.textContent = words[wordIndex];
  wordIndex = (wordIndex + 1) % words.length;
}, 3000);
