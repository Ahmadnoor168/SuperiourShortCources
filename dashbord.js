// Retrieve data from localStorage
const storedData = localStorage.getItem('localData');
const data = JSON.parse(storedData) || [];

// Get the table body element
const tableBody = document.querySelector('#data-table tbody');

// Iterate over the data array and create table rows
data.forEach((item) => {
  // Create a new row
  const row = document.createElement('tr');

  // Populate the row with data
  row.innerHTML = `
    <td>${item.FirstName}</td>
    <td>${item.LastName}</td>
    <td>${item.FatherName}</td>
    <td>${item.PhoneNumber}</td>
    <td>${item.Qualification}</td>
    <td>${item.TotalMark}</td>
    <td>${item.ObtainMark}</td>
    <td>${item.CNIC}</td>
  `;

  // Append the row to the table body
  tableBody.appendChild(row);
});
