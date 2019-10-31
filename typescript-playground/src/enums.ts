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
    Hearts = 'HEARTS',
    Clubs = 'CLUBS',
    Spades = 'SPADES',
    Diamonds = 'DIAMONDS'
}

const receivesEnum = (val: CardsEnumConst) => {
    console.log('receivesEnum', {val, eq: val === CardsEnumConst.Clubs})
}

console.log('CardsEnumConst')
console.log(CardsEnumConst['Hearts'])
console.log(CardsEnumConst.Clubs === 'CLUBS')
console.log(JSON.stringify(Object.keys(CardsEnumConst)))

receivesEnum('CLUB' as CardsEnumConst)
receivesEnum('CLUBS' as CardsEnumConst)

const CardsObj = {
    Hearts: 'Hearts',
    Clubs: 'Clubs',
    Spades: 'Spades',
    Diamonds: 'Diamonds'
}
console.log('CardsObj')
console.log(CardsObj['Hearts'])
console.log(JSON.stringify(Object.keys(CardsObj)))
