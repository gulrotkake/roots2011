function(selectors) {
  var form = $(this);
  var doc = form.serializeObject();
  doc.created_at = new Date();
  $$(this).app.db.saveDoc(doc, {
    success : function() {
      form[0].reset();
    },
    error : function(code, msg, detail) {
      alert(detail);
    }
  });
  selectors.preventDefault();
}
