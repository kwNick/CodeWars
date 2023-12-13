function powersOfTwo(n){
    class makeIt {  //using a generator function as a computed property
      *[Symbol.iterator]() {
      for (let i = 0; i <= n; i++) {
        yield Math.pow(2, i);
      }
    }
  }
    return [...Array.from(new makeIt())];
  }