(function() {
window["template"] = window["template"] || {};

window["template"]["tableRow"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<tr>\n    <td>' +
((__t = (detail)) == null ? '' : __t) +
'</td>\n    <td>' +
((__t = (money)) == null ? '' : __t) +
'</td>\n</tr>';

}
return __p
}})();
(function() {
window["template"] = window["template"] || {};

window["template"]["timeRow"] = function(obj) {
obj || (obj = {});
var __t, __p = '';
with (obj) {
__p += '<tr class="w3-pale-blue">\n    <th>' +
((__t = (time)) == null ? '' : __t) +
'</th>\n    <th></th>\n</tr>';

}
return __p
}})();