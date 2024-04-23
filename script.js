const seatingChartContainer = document.querySelector('.seating-chart');

function createSeat(row, seat) {
    const seatElement = document.createElement('div');
    seatElement.classList.add('seat');
    seatElement.dataset.row = row;
    seatElement.dataset.seat = seat;
    seatElement.textContent = `${row}${seat}`;
    seatElement.addEventListener('click', toggleSeat);
    return seatElement;
}

function createSpace() {
    const spaceElement = document.createElement('div');
    spaceElement.classList.add('space');
    return spaceElement;
}

function toggleSeat() {
  this.classList.toggle('selected');
}

function createSeatingChart() {
    for (let row = 'A'.charCodeAt(0); row <= 'J'.charCodeAt(0); row++) {
      for (let seat = 1; seat <= 54; seat++) {
        const seatElement = createSeat(String.fromCharCode(row), seat);
        seatingChartContainer.appendChild(seatElement);
        
      }
    }
}

createSeatingChart();