/**
 * Created by ranwahle on 5/26/15.
 */
(function()
{

    var MyElement = document.registerElement('my-element',{
        pototype:Object.create(HTMLElement.prototype),
        textContent: 'default text content'
    });
    MyElement.prototype.onMouseOver = function()
    {
        console.log(this);
        this.addEventListener('mouseover',function()
        {
            this.textContent = 'A mouse is over me';
        });

        this.addEventListener('mouseout', function()
        {
            this.textContent = 'The mouse is out';
        });
    };

    MyElement.prototype.attachedCallback = function()
    {
        this.onMoseOver.apply(this);
    };

    //MyElement.textContent = 'default content';


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
        myNewElement.textContent = 'default text content';
        myNewElement.onMouseOver();
        document.body.appendChild(myNewElement);
    });
    //var myElement = document.getElementById('myElementId');

});

}());
