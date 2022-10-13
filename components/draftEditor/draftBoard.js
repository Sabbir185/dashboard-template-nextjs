import React, { useEffect, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';


const DraftBoard = ({ value, onChange }) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    useEffect(() => {
        const contentBlock = htmlToDraft(value || "");
        if (contentBlock) {
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks)
            setEditorState(EditorState.createWithContent(contentState))
        }
    }, [])

    const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
        if (onChange) {
            onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())))
        }
    }


    return (
        <div className='border shadow-sm h-80'>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName=""
                editorClassName="tw-h-40"
                onEditorStateChange={onEditorStateChange}
                placeholder='Write here'
            />
        </div>
    );
};

export default DraftBoard;