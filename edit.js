function editItem() {
  let targetData = event.target.parentElement.parentElement
  let index = targetData.children[0].innerHTML

  let storeData = localStorage.getItem('books')
  itemArray = JSON.parse(storeData)

  targetData.children[0].innerHTML = null
  targetData.children[1].innerHTML = null
  targetData.children[2].innerHTML = null
  targetData.children[3].innerHTML = null
  targetData.children[4].innerHTML = null
  targetData.children[5].innerHTML = null
  targetData.children[6].innerHTML = null
  targetData.children[7].innerHTML = null
  targetData.children[8].innerHTML = null

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

  //date.type = "Date";
  console.log('targetData.children[0].appendChild(name)', targetData.children[0].appendChild(name))
  targetData.children[0].appendChild(name)
  targetData.children[1].appendChild(fatherName)
  targetData.children[2].appendChild(courceName)
  targetData.children[3].appendChild(phone)
  targetData.children[4].appendChild(qualificatio)
  targetData.children[5].appendChild(total)
  targetData.children[6].appendChild(obtain)
  targetData.children[7].appendChild(cnic)
  targetData.children[8].appendChild(doneBtn)
  targetData.children[8].appendChild(cancelBtn)

  //console.log(index);
  console.log('itemArray[index][0]', itemArray[index][0])
  name.value = itemArray[index][0]
  fatherName.value = itemArray[index][1]
  courceName.value = itemArray[index][2]
  phone.value = itemArray[index][3]
  qualificatio.value = itemArray[index][4]
  total.value = itemArray[index][5]
  obtain.value = itemArray[index][6]
  cnic.value = itemArray[index][7]

  alert('Update Data')

  doneBtn.addEventListener('click', updateFunction)

  function updateFunction() {
    alert()
    // Retrieve the input values inside the updateFunction
    // const updatedName = name.value
    // const updatedFatherName = fatherName.value
    // const updatedCourceName = courceName.value
    // const updatedPhone = phone.value
    // const updatedQualification = qualificatio.value
    // const updatedTotal = total.value
    // const updatedObtain = obtain.value
    // const updatedCnic = cnic.value

    // Update the itemArray with the correct index
    // itemArray[index - 1] = {
    //   : updatedName,
    //   LastName: updatedFatherName,
    //   FatherName: updatedCourceName,
    //   PhoneNumber: updatedPhone,
    //   Qualification: updatedQualification,
    //   TotalMark: updatedTotal,
    //   ObtainMark: updatedObtain,
    //   CNIC: updatedCnic,
    // }

    // Save the updated itemArray in localStorage
    // localStorage.setItem('books', JSON.stringify(itemArray))

    // Revert back to the table view
    // window.location.href = 'Library.html';
  }
  cancelBtn.addEventListener('click', () => {
    window.location.href = 'Library.html'
  })
}
