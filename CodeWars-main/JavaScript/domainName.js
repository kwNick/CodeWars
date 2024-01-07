//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)(?:\..*)/i)[1];
  //   let helper = url.replace(/(?:http(s)?:\/\/)?(?:w{3}\.)?/i, "");
  //   return helper.replace(/(?:\..*)/i, "");
  }