/**
 * Created by ranwahle on 5/26/15.
 */
(function()
{
    document.addEventListener('DOMContentLoaded', function() {
        var template = document.querySelector('#template');
        var clone = document.importNode(template.content, true);
        var host = document.querySelector('#host');
        host.appendChild(clone);
    });
}());