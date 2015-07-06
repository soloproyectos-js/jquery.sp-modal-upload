# jQuery.spModalUpload

A Modal Upload plugin for jQuery.

When uploading a file a modal loading appears and it is closed when the request is complete.

```JavaScript
var inputFile = $('#file');
inputFile.change(function () {
    $.spModalUpload(inputFile, 'test.php').done(function (data) {
        // success!
        inputFile.val('');
    });
});
```

See `demos/modal-request` for complete examples.
