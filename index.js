// Please do not change the prewritten code
 const axios = require('axios');

const Solution = async () => {
  // Write your code here
  try{
   const response = await axios.get('https://api.codingninjas.com/api/v3/event_tags');

   const responseData = response.data;

   console.log(responseData);
  } catch{
    console.log('Error fetching data:' , error.messege);
  }
};
Solution();
module.exports = Solution;

//  Jest encountered an unexpected token

// Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

// Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

// By default "node_modules" folder is ignored by transformers.

// Here's what you can do:
//  • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
//  • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
//  • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
//  • If you need a custom transformation specify a "transform" option in your config.
//  • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

// You'll find 