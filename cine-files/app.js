const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')

const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')


let ticketPrice = +movieSelect.value
//Event listener


//Seat Click Event

container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateSelectedCount()
    }
})

//Event Listener Movie Select Event

movieSelect.addEventListener('change', (e)=> {
    ticketPrice = e.target.value;
    updateSelectedCount()
})

//Function

const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected')
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount*ticketPrice
}