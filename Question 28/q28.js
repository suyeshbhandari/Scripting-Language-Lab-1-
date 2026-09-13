// 1. Target the DOM elements
const wrapper = document.querySelector('.wrapper');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const ul = document.querySelector('ul');
const listItems = document.querySelectorAll('li');

// 2. Format the h1 to include a dynamic year span
h1.innerHTML = 'JS Challenge <span id="year">2026</span>';
const yearSpan = document.getElementById('year');

// 3. Create and insert the date/time container
const dateTimeBox = document.createElement('div');
dateTimeBox.id = 'date-time';
wrapper.insertBefore(dateTimeBox, ul);

// 4. Helper function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 5. Helper function to format live date and time
function updateDateTime() {
  const now = new Date();
  const options = { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit', 
    hour12: true 
  };
  dateTimeBox.textContent = now.toLocaleString('en-US', options);
}

// 6. Apply base styles using JavaScript
wrapper.style.fontFamily = 'sans-serif';
wrapper.style.textAlign = 'center';
wrapper.style.maxWidth = '500px';
wrapper.style.margin = '40px auto';

h1.style.fontSize = '2.5rem';
yearSpan.style.fontSize = '3rem';
yearSpan.style.transition = 'color 0.4s ease';

h2.style.textDecoration = 'underline';
h2.style.fontWeight = '300';
h2.style.color = '#555';

dateTimeBox.style.display = 'inline-block';
dateTimeBox.style.padding = '10px 20px';
dateTimeBox.style.margin = '15px 0';
dateTimeBox.style.fontSize = '0.9rem';
dateTimeBox.style.fontWeight = 'bold';
dateTimeBox.style.borderRadius = '4px';
dateTimeBox.style.transition = 'background-color 0.4s ease';

ul.style.listStyleType = 'none';
ul.style.padding = '0';
ul.style.textAlign = 'left';

// 7. Apply status colors to list items based on content text
listItems.forEach(item => {
  item.style.padding = '15px';
  item.style.margin = '5px 0';
  item.style.borderRadius = '4px';
  item.style.fontWeight = '500';
  
  const text = item.textContent.toLowerCase();
  
  if (text.includes('done')) {
    item.style.backgroundColor = '#22c55e'; // Green
    item.style.color = '#ffffff';
  } else if (text.includes('ongoing')) {
    item.style.backgroundColor = '#eab308'; // Yellow
    item.style.color = '#000000';
  } else if (text.includes('coming')) {
    item.style.backgroundColor = '#ef4444'; // Red
    item.style.color = '#ffffff';
  }
});

// 8. Timers for dynamic live changes
updateDateTime(); // Initial execution

setInterval(() => {
  // Requirement a: The year color changes every 1 second
  yearSpan.style.color = getRandomColor();
  
  // Requirement b: The date/time background color changes every 1 second
  dateTimeBox.style.backgroundColor = getRandomColor();
  updateDateTime();
}, 1000);
