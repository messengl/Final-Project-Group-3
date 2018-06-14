(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['table'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<th>\r\n			"
    + container.escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"content","hash":{},"data":data}) : helper)))
    + "\r\n		</th>\r\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "		<tr class = \"data-row\">\r\n		\r\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "		\r\n		</tr>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "			<td class = data> "
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " <td>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : (container.nullContext || {});

  return "// Verdana, Geneva, sans-serif\r\n<html>\r\n\r\n\r\n\r\n<table>\r\n	<tr id= \"category\">\r\n	\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	\r\n	</tr>\r\n	\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.data : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n</table>\r\n\r\n\r\n</html>\r\n\r\n//type in random gunk like this\r\n";
},"useData":true});
})();