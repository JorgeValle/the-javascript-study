/**
 * A factory returns a new object, without having to use the new keyword
 */
const createSecurity = ({type, value}) => ({
  type,
  value,
  updateValue(value) {
    this.value = value;
    return this;
  }
});

let stockA = createSecurity({
  type: 'stock',
  value: 100
});

let stockB = createSecurity({
  type: 'stock',
  value: 300
});

console.log(stockA);
console.log(stockB);

/**
 * A factory with default values
 * Without the = {} default, createBetterSecurity() without args would throw error
 */
const createBetterSecurity = ({
  type = 'stock',
  value = 0
} = {}) => ({
  type,
  value,
  updateValue(value) {
    this.value = value;
    return this;
  }
});

console.log(createBetterSecurity());