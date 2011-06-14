function(selector) {
    var form = $(this);
    var data = form.serializeObject();
    data.created_at = new Date();
    $$(this).app.db.saveDoc(data, {
        success : function() {
            form[0].reset();
        },
        error : function(code, msg, detail) {
            alert('Error: '+detail);
        }
    });
    selector.preventDefault();
}
