function showSection(sectionId) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(sec => sec.style.display = 'none');
  document.getElementById(sectionId).style.display = 'block';
}

// === Quote of the Day Feature ===
const quotes = [
  "Leadership is not a position, it’s an action.",
  "A true leader serves first before leading.",
  "Dream big, work hard, stay humble.",
  "Your voice matters—use it for change.",
  "Together, we make the difference.",
  "Discipline and dedication define greatness.",
  "Be the reason someone smiles today.",
  "Change begins with courage.",
  "Small acts, when multiplied, make big impact.",
  "In unity, there is strength."
];

const quoteElement = document.getElementById('quote-text');
const quotePopup = document.getElementById('quote-popup');

// Pick daily quote
const today = new Date().getDate();
quoteElement.textContent = quotes[today % quotes.length];

// Hide popup after 10 seconds with fade-out effect
setTimeout(() => {
  quotePopup.style.animation = "fadeOut 1s ease forwards";
  setTimeout(() => quotePopup.style.display = "none", 1000);
}, 10000);
