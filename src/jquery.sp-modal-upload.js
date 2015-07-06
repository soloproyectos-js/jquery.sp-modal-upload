/**
 * jQuery.spModalUpload - A Modal Upload plugin for jQuery.
 *
 * This plugin requires: 
 *      1. jQuery >= 2.1.3
 *      2. jQuery.ui >= 1.11.4
 *
 * @author    Gonzalo Chumillas <gchumillas@email.com>
 * @license   https://github.com/soloproyectos/jquery.modal-upload/blob/master/LICENSE MIT License
 * @link      https://github.com/soloproyectos/jquery.modal-upload
 */
(function ($) {
    /**
     * Uploads a file.
     * 
     * Example:
     * ```JavaScript
     * var inputFile = $('#file');
     * inputFile.change(function () {
     *     $.spModalUpload(inputFile, 'test.php', {one: 1, two: 2}).done(function (data) {
     *         console.log(data);
     *     }).fail(function () {
     *         console.log('failed!');
     *     });
     * });
     * ```
     * 
     * @param {jQuery.<HTMLInputElement>|String} input Input file(s)
     * @param {String}                           url   URL
     * @param {Object}                           data  Parameters (not required)
     * 
     * @return {jQuery.Promise}
     */
    $.spModalUpload = function (input, url, data) {
        var req = new $.spModalUploadClass(input, url, data);
        return req.send();
    };
})(jQuery);
