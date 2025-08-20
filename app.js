var uploadFile = function () {
    console.log("ボタンがクリックされました");
    var inputFile = document.getElementById("movieFile");
    if (!inputFile) {
        alert("アップロードに失敗しました");
        return;
    }
    var file = inputFile.files ? inputFile.files[0] : undefined;
    if (!file) {
        alert("ファイルを選んでください");
        return;
    }
    console.log("選択されたファイル:", file.name);
};
