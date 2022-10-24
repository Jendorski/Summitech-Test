const mongoose = require('mongoose');
const config = require('../config.js');

const mongoUrl = config.MONGO_URL;

const load = async() =>{
	try{
		await mongoose.connect(mongoUrl, {
			useNewUrlParser: true,
			useCreateIndex: true, 
			useUnifiedTopology:true,
			useFindAndModify:false
		}).then(()=>{
			console.info('Server Database Connected');
		});
	}
	catch(err){
        console.error('Error connecting to the DB: ' + err);
		process.exit(1);
	}
};
module.exports.load = load;