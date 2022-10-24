
const commentController = {
    addComment: async(req, res) => {
        try{

        }catch(err){
            return jsonFailed(res, 500, err, {});
        }
    }
}
module.exports = commentController;