class Tester {
    thisParam(this, a, b) {
        console.log('class.thisParam', {this: this, a, b})
    }
    default(a, b) {
        console.log('class.default', {this: this, a, b})
    }
}
const tester = new Tester()

function noClass_thisParam(this, a, b) {
    console.log('noClass.thisParam', {this: this, a, b})
}
function noClass_default(a, b) {
    console.log('noClass.default', {this: this, a, b})
}

tester.thisParam('a-val', 'b-val')
tester.default('a-val', 'b-val')
noClass_thisParam('a-val', 'b-val')
noClass_default('a-val', 'b-val')
