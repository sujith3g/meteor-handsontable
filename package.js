/* 
* @Author: sg
* @Date:   2014-06-12 13:51:42
* @Last Modified by:   sg
* @Last Modified time: 2014-06-19 02:53:37
* @Email: sujith3g@gmail.com 
*/
Package.describe({
summary: "My custom HandsonTable package"
});
Package.on_use(function (api, where) {
	api.use(['jquery'], 'client');
	api.add_files(['libs/jquery.handsontable.full.js','libs/jquery.handsontable.full.css'], 'client');
});