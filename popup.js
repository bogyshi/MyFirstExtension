document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('submitbutton').addEventListener("click", function()
    {
        var clrValue = document.getElementById('color').value;

        chrome.tabs.executeScript(null,
        {
            code:"document.body.style.backgroundColor='" + clrValue + "'"
        });

    });

});
