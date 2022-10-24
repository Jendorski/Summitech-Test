const { jsonFailed } = require("../utils");

const authController = {
    register: async(req, res) => {
        try{ 
            const { fullName, email, password } = req.body;

        }catch(err){
            return jsonFailed(res, 500, err, {});
        }
    },
		login: async(req, res) => {

		},
		logout: async(req, res) => {
			
		}
};