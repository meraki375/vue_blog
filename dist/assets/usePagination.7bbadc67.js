import{A as u}from"./index.80a4af11.js";function c(t,i={defaultPageSize:10}){const n=u(1),o=u(i.defaultPageSize),a=u(0);function r(e){n.value=e,t&&t()}function f(e){n.value=1,o.value=e,t&&t()}function g(e){a.value=e}return{current:n,pageSize:o,total:a,changeCurrent:r,changePageSize:f,setTotal:g}}export{c as u};
