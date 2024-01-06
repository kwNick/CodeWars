
//Create a method to see whether the string is ALL CAPS.
String.prototype.isUpperCase = function() {
    for(var j = 0; j < this.length; j++){
      if(this.charCodeAt(j) > 96 && this.charCodeAt(j) < 123){
        return false;
      }
    }
    return true;
  }


String.prototype.isUpperCase = function () {
    return !/[a-z]/.test(this);
  };

String.prototype.isUpperCase = function() {
    return this.toUpperCase() === this.toString();
  }