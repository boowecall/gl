$(document).ready(function() {
    $.ajax({
        url: "https://boowecall.github.io/gl/sr-maven/"
    }).then(function(data, status, jqxhr) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
       console.log(jqxhr);
    });
});
