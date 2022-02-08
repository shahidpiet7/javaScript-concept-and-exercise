/**
 * The main concept behind all this methods is Function burrowing.
 *
 * Function borrowing allows us to use the methods of one object on a different object without having to make a copy of that method and maintain it in two separate places. It is accomplished through the use of . call() , . apply() , or . bind() , all of which exist to explicitly set this on the method we are borrowing
 */

const nameData = {
  firstname: 'Shahid',
  lastname: 'Rahim',
}

const getFullName = function (city, company) {
  console.log(
    this.firstname +
      ' ' +
      this.lastname +
      ' works for ' +
      company +
      ', ' +
      city +
      '.'
  )
}

/**
 * Call invokes the function immediately and allows you to pass in arguments one by one
 */

getFullName.call(nameData, 'Gurgaon', 'COBOLD') //Shahid Rahim works for COBOLD, Gurgaon.

/**
 * Apply invokes the function immediately and allows you to pass in arguments as an array.
 */

getFullName.apply(nameData, ['Gurugram', 'Cobold']) //Shahid Rahim works for Cobold, Gurugram.

/**
 * -Bind will be used if you want your execution context to come later in the picture.
 *
 * -Bind returns a new function, and you can invoke/call it anytime you want by invoking a function.
 *
 * -Bind returns a function that can be used later by invoking it (does'nt call it immediately)
 */

let printMyName = getFullName.bind(nameData, 'Gurgaon', 'Cobold Digital')

printMyName() // Shahid Rahim works for Cobold Digital, Gurgaon.
