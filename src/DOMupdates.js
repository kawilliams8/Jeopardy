import $ from 'jquery';

let DOMupdates = {

  startGame(game) {
    game.startGame(
      $('.playerInput').eq(0).val(), 
      $('.playerInput').eq(1).val(), 
      $('.playerInput').eq(2).val()
    );
  },

  disableStartButton() {
    $('.submit').prop('disabled', true);
  },

  displayPlayerNames() {
    $('.player').eq(0).text($('.playerInput').eq(0).val());
    $('.player').eq(1).text($('.playerInput').eq(1).val());
    $('.player').eq(2).text($('.playerInput').eq(2).val());
  },

  displayCurrentRound(round) {
    $('.currentRound').text(round);
  },

  displayCurrentPlayer(currentPlayer, lastPlayer) {
    let newArticle = $(
      `<input class="playerAnswerInput" type="text" placeholder="Enter your answer">`
    )
    $(currentPlayer).append(newArticle);
    $(`${currentPlayer}`).css('border', 'solid #F3C53D 5px');
    $(`${currentPlayer}`).css('border-radius', '5px');
    $(lastPlayer).empty().css('border', '');
  },

  hideGameboard() {
    $('.gameboard').hide();
    $('.playerAnswerInput').hide().css('border', '');
    $('#test').hide().css('border', '');
  },

  finalJeopardy(category, question) {
    let newGameBoard = $(
      `<h1 class='finalCategory'>${category}</h1>
      <p class='finalClue'>${question}</p>`
    )
    $('.finalJeopardy').append(newGameBoard)
    $('.finalCategory, .finalClue').css({'background-color': '#0033CC', 'color': '#ffffff', 'font-family': 'Oswald', 'border': '4px solid black', 'text-align': 'center', 'box-sizing': 'border-box', 'height': '225px', 'width': '325px', 'border-radius': '2px', 'margin': '40px', 'padding-top': '50px', 'margin-left': '90px'})
    $('.finalClue').css({'text-transform': 'uppercase', 'padding': '20px', 'font-size': '20px'})

  },

  showWagerInputs() {
    let finalWagerInputOne = $(
      `<input class='finalWagerInputOne' type='text' placeholder='Enter your wager'></input>`
    )

    let finalWagerInputTwo = $(
      `<input class='finalWagerInputTwo' type='text' placeholder='Enter your wager'></input>`
    )

    let finalWagerInputThree = $(
      `<input class='finalWagerInputThree' type='text' placeholder='Enter your wager'></input>`
    )

    $('.playerFinalWagerOne').append(finalWagerInputOne);
    $('.playerFinalWagerTwo').append(finalWagerInputTwo);
    $('.playerFinalWagerThree').append(finalWagerInputThree);
    $('.submitAnswer').hide()
    $('.finalWagerButton').show();
  },

  saveFinalWager(game) {
    game.finalJeopardy.collectWagers(
      $('.finalWagerInputOne').val(), 
      $('.finalWagerInputTwo').val(), 
      $('.finalWagerInputThree').val()
    )
  },

  finalJeopardyPlayerInputs() {
    $('.finalWagerInputOne').hide()
    $('.finalWagerInputTwo').hide()
    $('.finalWagerInputThree').hide()
    let finalAnswerInputOne = $(
      `<input class='finalAnswerInputOne' type='text' placeholder='Enter your answer'></input>`
    )

    let finalAnswerInputTwo = $(
      `<input class='finalAnswerInputTwo' type='text' placeholder='Enter your answer'></input>`
    )

    let finalAnswerInputThree = $(
      `<input class='finalAnswerInputThree' type='text' placeholder='Enter your answer'></input>`
    )

    $('.playerFinalWagerOne').append(finalAnswerInputOne);
    $('.playerFinalWagerTwo').append(finalAnswerInputTwo);
    $('.playerFinalWagerThree').append(finalAnswerInputThree);
    $('.finalWagerButton').hide();
    $('.finalAnswerButton').show();
  },

  saveFinalAnswer(game) {
    game.finalJeopardy.collectAnswers(
      $('.finalAnswerInputOne').val(), 
      $('.finalAnswerInputTwo').val(), 
      $('.finalAnswerInputThree').val()
    )
  },

  getPlayerWager(currentPlayer) {
    currentPlayer.acceptWager(
      $('.playerWagerInput').val()
    );
  },

  showDailyDouble() {
    $('.playerWagerInput').val('');
    $('.wager').show();
  },

  hideDailyDouble() {
    $('.wager').hide();
  },

  hideButtons() {
    $('.finalWagerButton').hide();
    $('.finalAnswerButton').hide();
  },

  changeCategory(category) {
    $('.category').each((index, curCategory) => {
      $(curCategory).text(category[index])
    });
  },
  
  changeClue1(clue) {
    $('.clue1').each((index, curClue) => {
      $(curClue).text(`$${clue[index].pointValue}`)
    });
  },

  changeClue2(clue) {
    $('.clue2').each((index, curClue) => {
      $(curClue).text(`$${clue[index].pointValue}`)
    });
  },

  changeClue3(clue) {
    $('.clue3').each((index, curClue) => {
      $(curClue).text(`$${clue[index].pointValue}`)
    });
  },

  changeClue4(clue) {
    $('.clue4').each((index, curClue) => {
      $(curClue).text(`$${clue[index].pointValue}`)
    });
  },

  getPlayerAnswer(game) {
    game.savePlayerAnswer(
      $('.playerAnswerInput').val()
    );
  },

  updatePlayerScore(index, score) {
    $('.playerScore').eq(index).text(`$${score}`);
  },

  emptyClue(clueLocation) {
    $(`#${clueLocation}`).text('');
  },

  emptyPlayerAnswer() {
    $('.playerAnswerInput').val('');
  },

  resetClueColorRoundTwo() {
    $('td').removeClass('changeClueColor');
  },

  changeClueValue() {
    $('.200').text('$200')
    $('.400').text('$400')
    $('.600').text('$600')
    $('.800').text('$800')
  },

  showInstructions(message) {
    $('.instructions').text(message);
  },

  resetGame() {
    window.location.reload(true);
  }
}

export default DOMupdates;