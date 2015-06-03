/**
 * Created by ranwahle on 5/26/15.
 */
(function()
{
    var elementPrototype = Object.create(HTMLDivElement.prototype);
//    Object.defineProperty(elementPrototype, 'textContent', {value: 'default text content'} );

    elementPrototype.attachedCallback = function()
    {
        this.style.borderStyle = "solid";
        this.style.borderWidth = "1px";
        this.textContent = 'Default div content';
    };

    var MyElement = document.registerElement('my-element',{
        extends: 'div',
        prototype:elementPrototype
    });
    MyElement.textContent = 'default content';


document.addEventListener('DOMContentLoaded', function()
{
    var myElements = document.getElementsByTagName('my-element');
    for (var i = 0; i < myElements.length; i++)
    {
        var myElement = myElements[i];
        myElement.addEventListener('mouseover',function()
        {
            this.textContent = 'A mouse is over me';
        });

        myElement.addEventListener('mouseout', function()
        {
            this.textContent = 'The mouse is out';
        });

    }

    document.getElementById('btnCreateMyElement').addEventListener('click', function()
    {
        var myNewElement = new MyElement();
        document.body.appendChild(myNewElement);
    });
    //var myElement = document.getElementById('myElementId');

});

}());
