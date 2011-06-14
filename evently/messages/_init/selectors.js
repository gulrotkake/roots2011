function() {
  return {
    "#messageList" : {
      "_changes" : {
        "query" : {
          "view" : "recent-items",
          "descending" : true
        },
        "mustache" : "{{#messages}}<li>{{message}}</li>{{/messages}}",
        "data" : function (data) {
          return {
            messages : data.rows.map(function (row) {
              return row.value;
            })
          };
        }
      }
    }
  };
}