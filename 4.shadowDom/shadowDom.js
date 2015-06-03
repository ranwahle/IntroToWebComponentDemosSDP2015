/**
 * Created by ranwahle on 5/26/15.
 */
    document.addEventListener('DOMContentLoaded', function() {
        var shadow = document.querySelector('#nameTag').createShadowRoot();
        var link = document.querySelector('link[rel=import]');
        var templateImport = link.import;
        var template = templateImport.querySelector('#nameTagTemplate');
       // var template = document.querySelector('#nameTagTemplate');
        var clone = document.importNode(template.content, true);
        shadow.appendChild(clone);
    });