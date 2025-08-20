const uploadFile = () => {
    console.log("ボタンがクリックされました");
    const inputFile = document.getElementById("movieFile") as HTMLInputElement|null;
        if (!inputFile) {
            alert("アップロードに失敗しました");
            return;
            }
    const file: File | undefined = inputFile.files ? inputFile.files[0] : undefined;

    if (!file) {
        alert("ファイルを選んでください");
        return;
    }

    console.log("選択されたファイル:", file.name);
} 