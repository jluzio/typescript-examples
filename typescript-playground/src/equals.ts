class EqualsBean {
    val1?: string | null
    val2?: number | null
    val3?: boolean | null
}

let data = new EqualsBean()
let any: any = new Object()

console.log('--1--')
console.log(data.val1 == null)
console.log(data.val2 == null)
console.log(data.val3 == null)

console.log('--2--')
data.val1 = null
data.val2 = null
data.val3 = null
console.log(data.val1 == null)
console.log(data.val2 == null)
console.log(data.val3 == null)

console.log('--3--')
data.val1 = ''
data.val2 = 0
data.val3 = false
console.log(data.val1 == null)
console.log(data.val2 == null)
console.log(data.val3 == null)

console.log('--4--')
data.val1 = 'test'
data.val2 = 12
data.val3 = true
console.log(data.val1 == null)
console.log(data.val2 == null)
console.log(data.val3 == null)

console.log('--5--')
console.log(any.xpto == null)
