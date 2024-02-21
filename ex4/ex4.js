
  document.addEventListener("DOMContentLoaded", function() {
    const hoverOverList = document.querySelector("#hoverOver");

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    hoverOverList.addEventListener('mouseover', function(event) {
        if(event.target.tagName === 'LI') {
            event.target.style.color = getRandomColor();
        }
    });

    hoverOverList.addEventListener('mouseout', function(event) {
        if(event.target.tagName === 'LI') {
            event.target.style.color = 'black';
        }
    });
});
