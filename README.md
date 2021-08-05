# JSON $ref resolver utility.

This is a small utility function that allows you to send in a JSON file and resolve all the $ref references
I've seen quite a few libraries that do this and they have a lot of dependencies and seemed unnecessarily complex (just my opinion)

## How to get started

1. Install the package

```js
npm i ref-resolver
```

and require it

```js
const resolver = require("ref-resolver")
```

2. Initialize the resolver with your JSON object

```js
resolver.init(<your JSON goes here>)
```

1. Call the resolve method

```js
(async ()=>{
    const { result } = await resolver.resolve()
})()
```

### Contributing

Please feel free to raise issues and PRs to this repository with improvements and suggestions.