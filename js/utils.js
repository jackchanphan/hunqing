if (typeof String.prototype.startsWith != 'function') { 
    String.prototype.startsWith = function(suffix) {  
        return this.indexOf(suffix) > -1; 
    }
}