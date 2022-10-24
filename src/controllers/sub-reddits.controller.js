const { jsonFailed } = require("../utils");

const subRedditController = {
    create: async(req, res) => {
			try{

			}catch(err){
					return jsonFailed(res, 500, err, {});
			}
    },
    edit: async(req, res) => {
        try{

        }catch(err){
            return jsonFailed(res, 500, err, {});
        }
    }
};
module.exports = subRedditController;