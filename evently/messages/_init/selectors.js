function() {
    return {
        '#messageList' : {
            _changes : {
                mustache:'{{#messages}}<li>{{message}}</li>{{/messages}}',
                data : function(msg) {
                    return {
                        messages : msg.rows.map(function (msg) {
                            return msg.value;
                        })
                    };
                },
                query : {
                    "view" : "recent-items",
                    "descending" : true
                }
            }
        }
    };
}
