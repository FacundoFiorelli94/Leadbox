const select = document.querySelector('.select-options');
const leftColumn = document.querySelector('.left-column-info');
const rightColumn = document.querySelector('.right-column-info');

select.addEventListener('change', () => {
  if (select.value === 'SALES') {
    leftColumn.children[0].textContent = 'Monday: 9:00am–9:00pm';
    leftColumn.children[1].textContent = 'Tuesday: 9:00am–9:00pm';
    leftColumn.children[2].textContent = 'Wednesday: 9:00am–9:00pm';
    leftColumn.children[3].textContent = 'Sunday: Closed';
    rightColumn.children[0].textContent = 'Thursday: 9:00am–9:00pm';
    rightColumn.children[1].textContent = 'Friday: 9:00am–9:00pm';
    rightColumn.children[2].textContent = 'Saturday: 9:00am–6:00pm';
  } else if (select.value === 'SERVICE') {
    leftColumn.children[0].textContent = 'Monday: 7:30am–5:30pm';
    leftColumn.children[1].textContent = 'Tuesday: 7:30am–5:30pm';
    leftColumn.children[2].textContent = 'Wednesday: 7:30am–5:30pm';
    leftColumn.children[3].textContent = 'Sunday: Closed';
    rightColumn.children[0].textContent = 'Thursday: 7:30am–5:30pm';
    rightColumn.children[1].textContent = 'Friday: 7:30am–5:30pm';
    rightColumn.children[2].textContent = 'Saturday: 8:00am–4:00pm';
  } else if (select.value === 'PARTS') {
    leftColumn.children[0].textContent = 'Monday: 8:00am–5:30pm';
    leftColumn.children[1].textContent = 'Tuesday: 8:00am–5:30pm';
    leftColumn.children[2].textContent = 'Wednesday: 8:00am–5:30pm';
    leftColumn.children[3].textContent = 'Sunday: Closed';
    rightColumn.children[0].textContent = 'Thursday: 8:00am–5:30pm';
    rightColumn.children[1].textContent = 'Friday: 8:00am–5:30pm';
    rightColumn.children[2].textContent = 'Saturday: 8:00am–4:00pm';
  }
});
