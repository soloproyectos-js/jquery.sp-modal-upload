# jQuery.spModalUpload

A Modal Upload plugin for jQuery.

## Install

Using [bower](http://bower.io/) package manager:
```bash
bower jquery.sp-modal-upload
```

Or copy the `dist/` files in your preferred location.

## Basic Usage

When uploading a file a modal loading appears and it is closed when the request is complete.

```JavaScript
var inputFile = $('#file');
inputFile.change(function () {
    $.spModalUpload(inputFile, 'test.php').done(function (data) {
        // prints server response and reset inputFile
        console.log(data);
        inputFile.val('');
    });
});
```

See `demos/modal-upload` for a complete example.
