// Retrieve data from localStorage
const storedData = localStorage.getItem('localData')
const data = JSON.parse(storedData) || []

// Get the table body element
const tableBody = document.querySelector('#data-table tbody')

// Iterate over the data array and create table rows
data.map((item, index) => {
  // Create a new row
  const row = document.createElement('tr')

  // Populate the row with data
  row.innerHTML = `
  <td>${index + 1}</td>
    <td>${item.FirstName}</td>
    <td>${item.LastName}</td>
    <td>${item.FatherName}</td>
    <td>${item.PhoneNumber}</td>
    <td>${item.Qualification}</td>
    <td>${item.TotalMark}</td>
    <td>${item.ObtainMark}</td>
    <td>${item.CNIC}</td>
    <td>
    <button onclick="editItem()" class="editBtn">Update</button>
<button onclick="deleteItem(${index})">Delete</button></td>
  `

  // Append the row to the table body
  tableBody.appendChild(row)
})

function deleteItem(index) {
  alert()
  console.log(index)
  let storeData = localStorage.getItem('localData')
  console.log('storeData', storeData)
  itemArray = JSON.parse(storeData)
  itemArray.splice(index, 1)
  localStorage.setItem('localData', JSON.stringify(itemArray))
  location.reload()
}

// --------------------========-----------------===----=============================================================

function editItem() {
  let targetData = event.target.parentElement.parentElement
  console.log(targetData)
  let index = targetData.children[0].innerHTML
  console.log('index', index)
  let storeData = localStorage.getItem('localData')
  itemArray = JSON.parse(storeData)

  console.log('----', targetData.children[9].innerHTML)

  targetData.children[1].innerHTML = null
  targetData.children[2].innerHTML = null
  targetData.children[3].innerHTML = null
  targetData.children[4].innerHTML = null
  targetData.children[5].innerHTML = null
  targetData.children[6].innerHTML = null
  targetData.children[7].innerHTML = null
  targetData.children[8].innerHTML = null
  targetData.children[9].innerHTML = null

  const name = document.createElement('input')
  const fatherName = document.createElement('input')
  const courceName = document.createElement('input')
  const phone = document.createElement('input')
  const qualificatio = document.createElement('input')
  const total = document.createElement('input')
  const obtain = document.createElement('input')
  const cnic = document.createElement('input')
  let doneBtn = document.createElement('button')
  let cancelBtn = document.createElement('button')

  doneBtn.innerText = 'Done'
  doneBtn.className = 'doneBtn'
  doneBtn.style.display = 'inlineBlock'
  doneBtn.style.margin = '3px'
  cancelBtn.innerText = 'Cancel'
  cancelBtn.className = 'cancelBtn'
  cancelBtn.style.display = 'inlineBlock'
  cancelBtn.style.margin = '3px'

  name.className = 'updateInputs'
  fatherName.className = 'updateInputs'
  courceName.className = 'updateInputs'
  phone.className = 'updateInputs'
  qualificatio.className = 'updateInputs'
  total.className = 'updateInputs'
  obtain.className = 'updateInputs'
  cnic.className = 'updateInputs'

  targetData.children[1].appendChild(name)
  targetData.children[2].appendChild(fatherName)
  targetData.children[3].appendChild(courceName)
  targetData.children[4].appendChild(phone)
  targetData.children[5].appendChild(qualificatio)
  targetData.children[6].appendChild(total)
  targetData.children[7].appendChild(obtain)
  targetData.children[8].appendChild(cnic)

  targetData.children[9].appendChild(doneBtn)
  targetData.children[9].appendChild(cancelBtn)

  console.log('itemArray[index - 1][0]', itemArray[index - 1])
  name.value = itemArray[index - 1]?.FirstName
  fatherName.value = itemArray[index - 1]?.LastName
  courceName.value = itemArray[index - 1]?.FatherName
  phone.value = itemArray[index - 1]?.PhoneNumber
  qualificatio.value = itemArray[index - 1]?.Qualification
  total.value = itemArray[index - 1]?.TotalMark
  obtain.value = itemArray[index - 1]?.ObtainMark
  cnic.value = itemArray[index - 1]?.CNIC

  doneBtn.addEventListener('click', updateFunction)

  console.log('doneBtn', doneBtn)
  function updateFunction() {
    console.log('itemArray', itemArray)
    itemArray[index - 1] = {
      FirstName: name.value,
      LastName: fatherName.value,
      FatherName: courceName.value,
      PhoneNumber: phone.value,
      Qualification: qualificatio.value,
      TotalMark: total.value,
      ObtainMark: obtain.value,
      CNIC: cnic.value,
    }

    localStorage.setItem('localData', JSON.stringify(itemArray))
    location.reload()
  }
  cancelBtn.addEventListener('click', () => {
    location.reload()
  })
}
