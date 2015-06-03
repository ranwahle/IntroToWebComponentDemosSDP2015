/**
 * Created by ranwahle on 5/26/15.
 */
(function () {
    var proto = Object.create(HTMLElement.prototype);
    proto.attachedCallback = function () {
        console.log(this);
        this.addEventListener('mouseover', function () {
            //this.style.borderStyle = 'solid';
            //this.style.borderWidth = '1px';
            this.className = 'mouseover';
        });

        this.addEventListener('mouseout', function () {
        //    this.style.borderStyle = 'none';
            this.className = 'mouseout';
        });

    };

    proto.addTemplate = function(templateId)
    {
        var template = document.querySelector(templateId);
        var clone = document.importNode(template.content, true);
        var host = this;
        host.appendChild(clone);
    };

    var MyElement = document.registerElement('my-element', {
        prototype: proto,
        extends: 'div'

    });

    //MyElement.textContent = 'default content';


    //document.addEventListener('DOMContentLoaded', function () {
    //
    //
    //
    //    document.getElementById('btnCreateMyElement').addEventListener('click', function () {
    //        var myNewElement = new MyElement();
    //        myNewElement.addTemplate('template')
    //        document.body.appendChild(myNewElement);
    //    });
    //    //var myElement = document.getElementById('myElementId');
    //
    //});

}());
