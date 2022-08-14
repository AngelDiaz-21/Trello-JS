require('dotenv').config()

if(!process.env.TOKEN && !process.env.KEY){
    throw new Error('No hay configuración con Api Key y con Token')
}

let Trello = require("trello");
let trello = new Trello(process.env.KEY, process.env.TOKEN);

let cardTitle = `Card Nueva ${new Date()}`;
let listId = "62dde02e48438d529de5a2cf";
let memberID = "62d8fe2c254de92f46671583";
let deletecardId = "";
let cardIdUpdated = "62f8736d73c44800fdcac017";
let cardIdGetCard = "62f683a5a3924200dca151c9";
let nameUpdatedCard = "Hola este soy yo, x2";
let boardId= "62dde02e48438d529de5a2c8"; // idboard de Launch X

trello.addCard(cardTitle, "LaunchX Card Description", listId,
	function (error, trelloCard) {
		if (error) {
			console.log('Could not add card:', error);
		}
		else {
			console.log('Added card:', trelloCard);
		}
	});	

trello.deleteCard(deletecardId,
function (error, trelloCard) {
		if (error) {
		console.log('Could not delete card:', error);
	}
	else {
			console.log('Delete card:', trelloCard);
		}
	});

trello.updateCardName(cardIdUpdated, nameUpdatedCard,
function (error, trelloCard) {
	if (error) {
		console.log('Updated not card:', error);
	}
	else {
		console.log('Updated card:', trelloCard);
	}
});

trello.updateCard(cardIdUpdated, "name", nameUpdatedCard,
function (error, trelloCard) {
	if (error) {
		console.log('Updated not card:', error);
	}
	else {
		console.log('Updated card:', trelloCard);
	}
});

trello.getCard(boardId, cardIdGetCard,
function (error, trelloCard) {
	if (error) {
		console.log('No get card:', error);
	}
	else {
		console.log('Get card:', trelloCard);
	}
});

trello.getCardById(cardIdGetCard,
function (error, trelloCard) {
	if (error) {
		console.log('No get card by id:', error);
	}
	else {
		console.log('Get card by id:', trelloCard);
	}
});

trello.getListsOnBoardByFilter(boardId, "open", (err, lists) => {
    if (err) console.error(err)
    
    console.log(lists)
})

trello.getBoards(memberID,
    function (error, trelloCard) {
        if (error) {
            console.log('No get boards:', error);
        }
        else {
            console.log('Get boards:', trelloCard);
        }
    });