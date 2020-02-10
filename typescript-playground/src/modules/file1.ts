const val1: OptNull<string> = null
console.log(val1)
export {}
/*
Due to export declaration file is considered a module.
In a module, only exported content affect the outside world.
Otherwise, all content affects the outside world.
*/
