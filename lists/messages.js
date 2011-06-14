function(head, req) {
    var ddoc = this;
    var Mustache = require('vendor/couchapp/lib/mustache');
    provides('html', function() {
        send('<!DOCTYPE html><html><body>');
        send(Mustache.to_html(ddoc.evently.add._init.mustache, {
            url : '/rootsconf'
        }));
        send('<h1>Messages</h1><ul id="messageList">');
        var row;
        while(row = getRow()) {
            send('<li>'+row.value.message+'</li>');
        };
        send('</ul></body></html>');
    });
}
