// He wants you to write a simple program telling him if he will be able to fit all the passengers.
function enough(cap, on, wait) {
    return on + wait > cap ? (on+wait)-cap : 0;
  }

//   return Math.max(wait + on - cap, 0);