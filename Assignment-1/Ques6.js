const decompress = require("decompress");
decompress("sample.zip", "dist")
  .then((files) => {
    console.log(files);
  })
  .catch((error) => {
    console.log(error);
  });
