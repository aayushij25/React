function LogicalNullish() {
  const condition = undefined; 

  return condition ?? <h1>Hello, nullish coalescing</h1>
  // return h1 if condition is null or undefined

}

export default LogicalNullish;