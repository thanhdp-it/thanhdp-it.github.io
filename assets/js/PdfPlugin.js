var _defaultImage = "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";
var _imagePrefix = "data:image/png;base64,";
var _pageWidth = 0;
var _pageHeight = 0;
var _pdf = null;
var _numOfPages = 0;
var _signBox;
var _pdfPage;
var _signImage;
var _signText;
var _posX, _posY, _signWidth, _signHeigth;

var pdfViewer = (function (plugin) {

    var _options = new Options();

    plugin.initPlugin = function () {

    }

    plugin.initData = function (file, callBack) {

        var fileReader = new FileReader();

        fileReader.onload = function () {

            var typedarray = new Uint8Array(this.result);

            pdfjsLib.getDocument(typedarray).promise.then(function (pdf) {
                _pdf = pdf;

                pdf.getPage(1).then(function (page) {
                    _options.page = 1;
                });
            });

            changePageButtonListener();

            _dataChanged = true;
        };
        fileReader.readAsArrayBuffer(file);
    }

    plugin.start = function () {
        _numOfPages = _pdf.numPages;
        console.log(_numOfPages);
        
        $('#current-page').text("1 / " + _numOfPages);

        _pdf.getPage(_options.page).then(function (page) {
            loadPage(page);
        });
    }

    //Tra ve thong so chu ky tren PDF
    plugin.getOptions = function() {
        return _options;
    }

    function loadPage(page) {
        var scale = 1;

        var xview = page.getViewport(1);
        _pageWidth = Math.floor(xview.width);
        _pageHeight = Math.floor(xview.height);
        console.log("width=" + _pageWidth + ". height=" + _pageHeight);
        
        //ppi cua pdf la 72
        var viewport = page.getViewport({scale: (getScale())});

        var canvas = document.getElementById('dropHere');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        //Load pdf len canvas
        var renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        page.render(renderContext);

        initSignatureBox();
    }

    function changePageButtonListener() {
        $('#pdf-prev-page').click(function() {
            if(_options.page - 1 > 0) {
                _options.page = _options.page - 1;
                _pdf.getPage(_options.page).then(function (page) {
                    $('#current-page').text(_options.page + " / " + _numOfPages);
                    loadPage(page);
                });
            }
        });

        $('#pdf-next-page').click(function() {
            console.log(_numOfPages);
            if(_options.page + 1 <= _numOfPages) {
                _options.page = _options.page + 1;
                _pdf.getPage(_options.page).then(function (page) {
                    $('#current-page').text(_options.page + " / " + _numOfPages);
                    loadPage(page);
                });
            }
        });
    }

    function initSignatureBox() {
        $( "#dragSignature" ).show();
        _signBox = $('#dragSignature');
        _pdfPage = $('#dropHere');
        _signImage = $('#signatureImg');

        _signImage.attr('src', _imagePrefix + _defaultImage);
        _options.imageSrc = _defaultImage;

        var tmp = 15 * getScale();

        var boundX = _pdfPage[0].offsetLeft;
        var boundY = _pdfPage[0].offsetTop;
        var xPos = boundX + tmp;

        var h = Math.floor(_signBox[0].offsetHeight );
        var yPos = boundY + tmp;
        _signBox.css({ 'top': yPos, 'left': xPos, 'position': 'absolute' });
        // $('#signature-img').attr('src', "data:image/png;base64," + _options.imageSrc);

        _options.x = 15;
        _options.y = _pageHeight - 15;

        var w = Math.floor(_signBox[0].offsetWidth / getScale());
        var h = Math.floor(_signBox[0].offsetHeight / getScale());

        _options.width = w;
        _options.height = h;

        showInforSignBox();

        setupSignatureBox();
    }

    function setupSignatureBox() {
        $( "#dragSignature" ).draggable({
            containment: $('#dropHere'),
            drag: function () {
                var boundX = _pdfPage[0].offsetLeft;
                var boundY = _pdfPage[0].offsetTop;

                var top = _signBox[0].offsetTop;
                var left = _signBox[0].offsetLeft;
                var offset = $(this).offset();

                var h = Math.floor(_signBox[0].offsetHeight / getScale());
                var w = Math.floor(_signBox[0].offsetWidth / getScale());

                //Lay toa do goc trai tren
                var xPos = Math.floor((left - boundX) / getScale());
                _options.x = xPos;
                var yPos = _pageHeight - Math.floor((top - boundY) / getScale());
                _options.y = yPos;

                showInforSignBox();
            },
            stop: function () {
                var boundX = _pdfPage.offset().left;
                var boundY = _pdfPage.offset().top;
                var finalOffset = $(this).offset();
                var finalxPos = finalOffset.left;
                var finalyPos = finalOffset.top;
            }
        });

        $( "#dragSignature" ).resizable({
            resize: function (event, ui) {
                changeSignBoxSize($(this));
            },
            stop: function (event, ui) {
                changeSignBoxSize($(this));
            }
        });

        $('#dropHere').droppable({
            accept: '#dragSignature',
            over: function () {
                $('#dragSignature').draggable('option', 'containment', $(this));
            }
        });
    }

    function changeSignBoxSize(box) {
        var w = Math.floor(box[0].offsetWidth / getScale());
        var h = Math.floor(box[0].offsetHeight / getScale());

        _options.width = w;
        _options.height = h;


        showInforSignBox();
    }

    function showInforSignBox() {
        var xPos = _options.x;
        var yPos = _options.y;
        var w = _options.width;
        var h = _options.height;

        $("#xyLeftTop").text(`(${xPos}, ${yPos})`);
        $("#xyRightTop").text(`(${xPos + w}, ${yPos})`);
        $("#xyRightBottom").text(`(${xPos + w}, ${yPos - h})`);
        $("#xyLeftBottom").text(`(${xPos}, ${yPos - h})`);

        $("#heightBox").text(h);
        $("#widthBox").text(w);
    }

    function getPpi() {
        return 72;
        // return document.getElementById('ppi').offsetWidth;
    }

    function getScale() {
        var offsetWidth = document.getElementById('parentView').offsetWidth;
        console.log((offsetWidth - 40) / _pageWidth);
        return (offsetWidth - 40) / _pageWidth;
    }

    function Options() {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.page = 1;
        this.imageSrc = "";
        this.rectangle = "";
    }

    return plugin;
}(pdfViewer || {}));


