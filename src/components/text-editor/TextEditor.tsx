import React, { FC, useEffect, useState } from 'react';

import classNames from 'classnames';
import { EditorState } from 'draft-js';
import dynamic from 'next/dynamic';
import { EditorProps } from 'react-draft-wysiwyg';

import styles from './TextEditor.module.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// @ts-ignore
const Editor = dynamic<EditorProps>(() => import('react-draft-wysiwyg').then(mod => mod.Editor), {
  ssr: false,
});

interface Props {
  className?: string;
}

const TextEditor: FC<Props> = ({ className }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  useEffect(() => {
    console.log(editorState);
  }, [editorState]);
  return (
    <div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName={styles.wrapper}
        editorClassName={classNames(styles.editor, className)}
        toolbarClassName={styles.toolbar}
        toolbar={{
          options: [
            'inline',
            'fontSize',
            'textAlign',
            'list',
            'link',
            'image',
            'emoji',
            'colorPicker',
          ],
          inline: { options: ['bold', 'italic', 'underline'] },
          textAlign: {
            options: ['left', 'center'],
          },
          list: {
            options: ['ordered'],
          },
          link: {
            options: ['link'],
          },
          image: {
            urlEnabled: true,
            uploadEnabled: true,
            alignmentEnabled: true,
            uploadCallback: undefined,
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
            alt: { present: false, mandatory: false },
            defaultSize: false,
          },
        }}
      />
    </div>
  );
};
export default TextEditor;
