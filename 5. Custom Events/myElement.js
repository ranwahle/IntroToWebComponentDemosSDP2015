/**
 * Created by ranwahle on 5/26/15.
 */
(function () {


    if (document.createEvent) {
        customEvent = document.createEvent("HTMLEvents");
        customEvent.initEvent("mouseovermyelement", true, true);
    } else {
        customEvent = document.createEventObject();
        customEvent.eventType = "mouseovermyelement";
    }

    customEvent.eventName = "mouseovermyelement";


    var proto = Object.create(HTMLElement.prototype);


    proto.attachedCallback = function () {
        var self = this;
        this.addEventListener('click', function()
        {
            //invoke custom event
            if (document.createEvent) {
                self.dispatchEvent(customEvent);
            } else {
                self.fireEvent("on" + customEvent.eventType, customEvent);
            }
        });
        this.addEventListener('mouseover', function () {
            //this.style.borderStyle = 'solid';
            //this.style.borderWidth = '1px';
            this.classList.add ( 'mouseover');
            this.classList.remove('mouseout');

            //invoke custom event
            if (document.createEvent) {
                self.dispatchEvent(customEvent);
            } else {
                self.fireEvent("on" + customEvent.eventType, customEvent);
            }


        });

        this.addEventListener('mouseout', function () {
        //    this.style.borderStyle = 'none';
            this.classList.add ( 'mouseout');
            this.classList.remove('mouseover');
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
