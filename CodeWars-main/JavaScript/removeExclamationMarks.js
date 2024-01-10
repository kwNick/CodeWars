function removeExclamationMarks(s) {
    return s.replace(/!/ig, "");
  }

  function removeExclamationMarks_(s) {
    return s.split('!').join('');
  }