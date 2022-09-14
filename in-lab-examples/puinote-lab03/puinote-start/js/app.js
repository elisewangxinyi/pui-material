function updateElement(){
    console.log("running the update elem funtion");
    const noteImageElem = document.querySelector("img.notecard-thumbnail");
    // console.log(noteImageElem);
    noteImageElem.src = notecard.noteImgURL;

    const noteTitleElem = document.querySelector("div.note-title");
    noteTitleElem.innerText = notecard.noteTitle;

    const noteBodyElem = document.querySelector("div.note-body");
    noteBodyElem.innerText = notecard.noteBody;
}

const notecard = {
    noteTitle: "VERY BIG TITLE",
    noteBody: "and here is the body of the note AHAHAH",
    noteImgURL: "assets/warhol-tiger.png"
}

//1. grab user input
//2. move user inputs into notecard object
//3. update element

function submitNote(){
    console.log("this is where we grab input");
    const editorTitleElem = document.querySelector("#note-editor-title");
    const editorBodyElem = document.querySelector("#note-editor-body");

    notecard.noteTitle = editorTitleElem.value;
    notecard.noteBody = editorBodyElem.value;
    updateElement();
}

const btnSubmit = document.querySelector("#btn-submit");
// on click
btnSubmit.onclick = submitNote; //why not submitNot()

