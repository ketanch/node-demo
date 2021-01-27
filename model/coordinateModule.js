const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var coordinateSchema = new Schema({
	x: {
		type: Number,
		required: true
	},
	y: {
		type: Number,
		required: true
	}
});

coordinateSchema.statics = {
	createNew : function(data) {
		var coordinate = new this(data);
		process.stdout.write("New Coordinate added : ");
		coordinate.printCoordinate();
		return coordinate.save();
	},
	getAll : async function(cb) {
		return res = await this.find({}, cb);
	},
	getNearest : async function(inp) {
		var res = await this.getAll();
		var min_dis = -1;
		var result = {};
		for (let i=0; i < res.length; i++) {
			let dis = (res[i].x-inp.x)*(res[i].x-inp.x) + (res[i].y-inp.y)*(res[i].y-inp.y);
			if (dis < min_dis || min_dis == -1) {
				min_dis = dis;
				result = res[i];
			}
		}
		console.log("Nearest Point : ", result);
		return result;
	}
};

coordinateSchema.methods = {
	printCoordinate : function() {
		console.log("(%d,%d)", this.x, this.y);
	}
};

var Coordinate = mongoose.model('Coordinate', coordinateSchema);
module.exports = Coordinate;
