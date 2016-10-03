$(document).ready(function () {
  $('table.board td').on('click', handleClick)
})

function handleClick(e) {
  console.log('handleClick()');
  var cell = $(e.currentTarget)
  if (cell.text().length > 0) {
    // Cell is not empty
    alert('Cell is already taken')
  } else {
    // Cell is empty
    setCellText(cell)

    if (hasWinner()) {
      // We have a winnner
      resetBoard()
      incrementScore()
      changeCurrentPlayer()
    } else {
      // No winner
      if (catWon()) {
        alert('Meow')
        resetBoard()
      }

      changeCurrentPlayer()
    }
  }
}

function catWon() {
  console.log('catWon()');
  return false
}

function changeCurrentPlayer() {
  console.log('changeCurrentPlayer()');
  var newPlayer;
  if (currentPlayer() === '1') {
    newPlayer = '2'
  } else {
    newPlayer = '1'
  }

  $('#currentPlayer').text(newPlayer)
}

function incrementScore() {
  console.log('incrementScore()');
  var cell;
  if (currentPlayer() === '1') {
    cell = $('#player1Score')
  } else {
    cell = $('#player2Score')
  }

  var score = parseInt(cell.text())
  score++
  cell.text(score)
}

function resetBoard() {
  console.log('resetBoard()');
  $('table.board td').text('')
}

function hasWinner() {
  console.log('hasWinner()');
  return true
}

function setCellText(cell) {
  console.log('setCellText()');
  if (currentPlayer() === '1') {
    cell.text('X')
  } else {
    cell.text('O')
  }
}

function currentPlayer() {
  return $('#currentPlayer').text()
}
