const Utils = {};

function json_send(res, data, message, status, status_code, is_error, meta) {
    try{
        data = data || null;
        message = message || '';
    
        const d = {
            status: (status_code >= 400) ? false : true,
            message,
            data
        };
    
        res.statusCode = status_code;
        return res.status(status_code).json(d);    
    }
    catch(err){
        console.trace('Error while jsonSending, ', err);
        return res.status(500).json({});
    }
}

Utils.jsonS = function(express_res, status_code = 200, message, data, meta) {
    return json_send(express_res, data, message, 'success', status_code, meta);
};

Utils.json401 = function(express_res, data, message, error = {}) {
    return json_send(express_res, data, message, 'error', 401, true, error);
};

Utils.jsonFailed = function(express_res, status_code = 400, message, data) {
    return express_res.status(status_code).json({
        message,
        data
    });
};

module.exports = Utils;