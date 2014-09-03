/* 
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   sg
* @Last Modified time: 2014-09-04 00:28:16
* @Email: sujith3g@gmail.com 
*/
Package.describe({
summary: "Handsontable 0.11.0-beta3 for meteor"
});
Package.on_use(function (api, where) {
	api.use(['jquery'], 'client');
	api.add_files(['libs/jquery.handsontable.full.js','libs/jquery.handsontable.full.css'], 'client');
	api.export("Handsontable");
});