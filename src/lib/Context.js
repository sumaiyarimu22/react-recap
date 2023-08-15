class Context {
  constructor(value) {
    this.value = value;
  }

  //provider
  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  //consumer
  consumer = ({ children }) => children(this.value);
}
function createContext(value = null) {
  const context = new Context(value);
  return {
    Provider: context.Provider,
    consumer: context.consumer,
  };
}

export default createContext;
