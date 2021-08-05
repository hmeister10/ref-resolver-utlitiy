
const cloneDeep = require('lodash/cloneDeep') 
const get = require('lodash/get')

module.exports = {
 root: {},
 init: function (inputObject) {
   this.root = inputObject
 },
 resolve: function (inputJSON) {
   // clone the JSON to avoid a pass by reference
   const outputJSON = cloneDeep(inputJSON || this.root)

   if (typeof outputJSON === 'object') {
     Object.keys(outputJSON).forEach((key) => {
       outputJSON[key] = this.evaluateObject(outputJSON[key])
     })
   }
   return { result: outputJSON }
 },
 evaluateObject: function (inputObject) {
   let outputObject = cloneDeep(inputObject)
   if (typeof outputObject === 'object') {
     if (outputObject.$ref) {
       // remove the #
       const cleanedPath = outputObject.$ref.split('/').slice(1, this.length).join('.')
       const value = get(this.root, cleanedPath)

       return value
     } else {
       const resolvedJSON = this.resolve(outputObject).result
       outputObject = resolvedJSON
     }
   }
   return outputObject
 },
}
