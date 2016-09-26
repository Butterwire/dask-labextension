// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

var path = require('path');

var buildExtension = require('jupyterlab-extension-builder').buildExtension;

buildExtension({
  name: 'dask-labextension',
  entry: './lib/plugin',
  outputDir : './dask_labextension/static'
});
