/**
 * Created by ranwahle on 5/26/15.
 */
(function()
{
    document.addEventListener('DOMContentLoaded', function() {

        document.getElementById('btnImport').addEventListener('click'
            , function() {

                var link = document.querySelector('link[rel=import]');
                var templateImport = link.import;
                var template = templateImport.querySelector('#template');
                var clone = document.importNode(template.content, true);
                var host = document.querySelector('#host');
                host.appendChild(clone);
            });
    });
}());