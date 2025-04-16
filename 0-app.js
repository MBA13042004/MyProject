const lodash=require('lodash');
const tab=[1,[2,[3,[4,[5,[6]]]]]];
const newtab=lodash.flattenDeep(tab);
console.log(newtab);