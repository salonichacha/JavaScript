
String.prototype.removeSubstring = function(SubString , Slength){
	this.SubString = SubString;
	this.Slength = Slength;	
	this.newStr = "";
	this.count = 0;

	if(this.Slength == undefined){
		for(var i = 0 ; i < this.length ; i++){

			if(this.charAt(i) != this.SubString){
				this.newStr += this.charAt(i);
			}
		}
	
	}

	else{

		for(var i = 0 ; i < this.length ; i++){
		
				if(this.count < Slength){
		
					if(this.charAt(i) != SubString){
						this.newStr += this.charAt(i);
					}
					else{
						this.count = this.count + 1;
					}
				}

				else{
					this.newStr += this.newStr + this.charAt(i);
				}
		}
	}
	console.log("The old String : " + this +"  New String is : " + this.newStr);
}


var str1 = 'aaa';
var newStr1 = str1.removeSubstring('a',2);

var str2 = 'aaabbbb';
var newStr2 = str2.removeSubstring('a');
