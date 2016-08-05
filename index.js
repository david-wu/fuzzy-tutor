var Rater = require('rater');
var tutor = require('tutor');
var cardNames = require('./cardNames');

function FuzzyTutor(){}

FuzzyTutor.prototype = {
	query: function(q){
		var rater = new Rater();
		rater.query = q;
		rater.array = cardNames;
		var cardName =  rater.sorted()[0].d;
		return new Promise(function(resolve, reject){
			tutor.card(cardName, function(err, res){
				if(err){
					return reject(err)
				}
				resolve(res)
			})
		});
	}
}

module.exports = new FuzzyTutor();