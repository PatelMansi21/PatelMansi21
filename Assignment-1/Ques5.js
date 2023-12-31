const JSZip = require('jszip');
const fs = require('fs');

const zip = new JSZip();

try {
    const pdfData = fs.readFileSync('./files/sample.pdf');
    zip.file("PDFFile.pdf", pdfData);

    zip.file("Textfile.txt", "Hello NodeJS\n");

    const images = ["./files/img1.png", "./files/img2.png"];
    const img = zip.folder("images");

    for (const image of images) {
        const imageData = fs.readFileSync(image);
        img.file(image, imageData);
    }

    zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
        .pipe(fs.createWriteStream('sample.zip'))
        .on('finish', function () {
            console.log("sample.zip written.");
        });

} catch (err) {
    console.error(err)
}