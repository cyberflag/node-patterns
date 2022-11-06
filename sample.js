/*
 * FileName: sample.js
 * CreateAt: 2022.11.06
 * Author: awoo
 * E-mail: awoooo@me.com
 */

let checkType = ((str, type) => {
  let rule = {
    string(str) {
      return typeof(str) === 'string'
    }
  }
  return {
    check(str, type) {
      return rule[type](str)
    },
    addRule(type, fn) {
      rule[type] = fn
    }
  }
})()

checkType.addRule('number', (num) => {
  return typeof(num) === 'number'
})
console.log(checkType.check('0', 'number'))
