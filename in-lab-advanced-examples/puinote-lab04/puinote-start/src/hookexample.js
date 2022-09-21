import React, {useState} from "react";
import './App.css';

function HookExample() {
    const [title, setTitle] = useState("Initial title");
    const [body, setBody] = useState("Initiial note body");

    return(
        <div>
            <div id="note-editor" className="edit-mode">
                <div id="btn-new-note">
                EDIT NOTE
                </div>
                <div className="note-editor-contents">
                <div className="note-editor-left">
                    <form>
                    <input id="note-editor-title" placeholder="Title of Your Note..."
                        name="dummy" maxLength="50" onChange={(event) => setTitle(event.target.value)}
                        value={title}></input>
                    <textarea id="note-editor-body" placeholder="Body of Your Note..."
                        rows="15" maxLength="1000" onChange={(event) => setBody(event.target.value)}
                        value={body}></textarea>
                    </form>
                </div>
                <div className="note-editor-right">
                    <p>{title}</p>
                    <p>{body}</p>
                </div>
            </div>
          </div>
        </div>
    )
}

export default HookExample;