
// function handleSelectFile(event) {
//     var files = event.target.files;
//     console.log(files); 
//     for(var i = 0, f; f = files[i]; i++) {
//         var reader = new FileReader();

//         reader.onload = (function(theFile) {
//             return function(e) {
//                 if(theFile == null) return;

//                 console.log('ok1');
//                 var file = $('#select-file').get(0).files[0];
//                 PdfPlugin.initData(file, null);
//             };
//         })(f);
//         reader.readAsDataURL(f);
//     }

// }

// document.getElementById('select-file').addEventListener('change', handleSelectFile, false);

$(document).ready(function () {
    pdfViewer.initPlugin();

    $('#submitPDF').click(function () {
        pdfViewer.start();
    });


    // $('.table-responsive').on('show.bs.dropdown', function () {
    //     $('.table-responsive').css("overflow", "inherit");
    // });

    // $('.table-responsive').on('hide.bs.dropdown', function () {
    //     $('.table-responsive').css("overflow", "auto");
    // });
});


