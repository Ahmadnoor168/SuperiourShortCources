const firstName = document.querySelector('#fname')
const lname = document.querySelector('#lname')
const fatherName = document.querySelector('#fatherName')
const pnumber = document.querySelector('#pnumber')
const qualification = document.querySelector('#qualification')
const tmark = document.querySelector('#tmark')
const obtain = document.querySelector('#obtain')
const cnic = document.querySelector('#cnic')

const submit = document.querySelector('#button')

submit.addEventListener('click', saveData)

function saveData(event) {
  try {
    console.log(
      'firstName',
      firstName.value,
      lname.value,
      fatherName.value,
      pnumber.value,
      qualification.value,
      tmark.value,
      obtain.value,
      cnic.value
    )

    if (firstName.value === '' || firstName.value === null) throw alert('Fill The in input')
    if (lname.value === '' || lname.value === null) throw alert('Fill The in input')
    if (fatherName.value === '' || fatherName.value === null) throw alert('Fill The in input')
    if (pnumber.value === '' || pnumber.value === null) throw alert('Fill The in input')
    if (qualification.value === '' || qualification.value === null) throw alert('Fill The in input')
    if (tmark.value === '' || tmark.value === null) throw alert('Fill The in input')
    if (obtain.value === '' || obtain.value === null) throw alert('Fill The in input')
    if (cnic.value === '' || cnic.value === null) throw alert('Fill The in input')

    const data = {
      FirstName: firstName.value,
      LastName: lname.value,
      FatherName: fatherName.value,
      PhoneNumber: pnumber.value,
      Qualification: qualification.value,
      TotalMark: tmark.value,
      ObtainMark: obtain.value,
      CNIC: cnic.value,
    }

    let localData

    if (localStorage.getItem('localData') === null) {
      localData = []
    } else {
      localData = JSON.parse(localStorage.getItem('localData'))
    }

    localData.push(data)
    localStorage.setItem('localData', JSON.stringify(localData))

    alert('Data Saved')
    window.location.href = './index.html'
  } catch (err) {
    console.log('input errer', err)
  }
}
