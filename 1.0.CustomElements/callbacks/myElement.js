/**
 * Created by ranwahle on 5/26/15.
 */
(function()
{
var proto = Object.create(HTMLElement.prototype);
    proto.attachedCallback= function () {

     this.addEventListener('mouseover', function () {
        this.textContent = 'A mouse is over me';
    });

    this.addEventListener('mouseout', function () {
        this.textContent = 'The mouse is out';
    });

};


    var MyElement = document.registerElement('my-element',{
        prototype: proto

    });




document.addEventListener('DOMContentLoaded', function()
{
    //var myElements = document.getElementsByTagName('my-element');
    //for (var i = 0; i < myElements.length; i++)
    //{
    //    var myElement = myElements[i];
    //    myElement.addEventListener('mouseover',function()
    //    {
    //        this.textContent = 'A mouse is over me';
    //    });
    //
    //    myElement.addEventListener('mouseout', function()
    //    {
    //        this.textContent = 'The mouse is out';
    //    });
    //
    //}

    document.getElementById('btnCreateMyElement').addEventListener('click', function()
    {
        var myNewElement = new MyElement();
        myNewElement.textContent = 'default text content';
        //myNewElement.onMouseOver();
        document.body.appendChild(myNewElement);
    });
    //var myElement = document.getElementById('myElementId');

});

}());
