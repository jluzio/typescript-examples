enum CardsEnum {
    Hearts = 'Hearts',
    Clubs = 'Clubs',
    Spades = 'Spades',
    Diamonds = 'Diamonds'
}
console.log('CardsEnum')
console.log(CardsEnum['Hearts'])
console.log(JSON.stringify(Object.keys(CardsEnum)))

enum CardsEnumConst {
    Hearts = 'Hearts',
    Clubs = 'Clubs',
    Spades = 'Spades',
    Diamonds = 'Diamonds'
}
console.log('CardsEnumConst')
console.log(CardsEnumConst['Hearts'])
console.log(JSON.stringify(Object.keys(CardsEnumConst)))

const CardsObj = {
    Hearts: 'Hearts',
    Clubs: 'Clubs',
    Spades: 'Spades',
    Diamonds: 'Diamonds'
}
console.log('CardsObj')
console.log(CardsObj['Hearts'])
console.log(JSON.stringify(Object.keys(CardsObj)))
