let buttonSubmit = document.querySelector('button[type=submit]')
let buttonReset = document.querySelector('button[type=reset]')
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

buttonSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    let month = document.querySelector('#month').value
    let year = document.querySelector('#year').value

    if (month == '' || year == '') {

        document.querySelector('#errorMessage').classList.remove('invisible')
        return;
    }
    
    resetCalendar()
    createCalendar(year, month)

})


buttonReset.addEventListener('click', () => resetCalendar())



function createCalendar(year, month) {
    let date = new Date(year, month)
    let table = document.querySelector('table')

    let start = (d = date.getDay() - 1) < 0 ? 6 : d

    while (date.getMonth() != (+month + 1)) {
        let day = date.getDate()

        table.rows[-~(start / 7)].cells[(start++) % 7].textContent = day

        date.setDate(day + 1)
    }

    document.querySelector('#year_and_month').textContent = `${months[date.getMonth() - 1]} ${date.getFullYear()}`

}

function resetCalendar() {
    let tdList = document.getElementsByTagName('td')
    for (let td of tdList) {
        td.innerHTML = '&nbsp;'
    }
    document.querySelector('#errorMessage').classList.add('invisible')
    document.querySelector('#year_and_month').textContent = 'Month Year'
}
