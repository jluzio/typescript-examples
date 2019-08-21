import {Ns1} from './ns1'
import './ns2'
import * as Ns2All from './ns2'
import {Ns3 as Ns3Renamed} from './ns3'
import * as Ns3All from './ns3'
import Ns1Default from './ns1'

namespace InFileNs1 {
    export const foo = "foo1"
}
namespace InFileNs2 {
    export const foo = "foo2"
}

console.log('foos', {ns1: InFileNs1.foo, ns2: InFileNs2.foo})
console.log(Ns1.foo)
//console.log(Ns2.foo); // error
console.log(Ns2All.otherVar1); // no access to namespace
console.log(Ns3Renamed.foo)
console.log(Ns3All.Ns3.foo)
console.log(Ns1Default.foo)
