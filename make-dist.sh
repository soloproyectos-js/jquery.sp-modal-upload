#!/bin/bash
# This script creates the distribution files. Usage:
# ./make-dist.sh

# remove dist files 
rm -rf dist/*

# compresses JavaScript files
cat \
    src/jquery.sp-modal-upload-class.js \
    src/jquery.sp-modal-upload.js \
| uglifyjs \
    --compress \
    --mangle \
    --preamble "/*! jQuery.spModalUpload v0.2.0 | Copyright (c) 2015 Gonzalo Chumillas | https://github.com/soloproyectos-js/jquery.sp-modal-upload/blob/master/LICENSE */" \
    -o dist/jquery.sp-modal-upload.min.js
