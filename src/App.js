import React from 'react'
import {CKEditor} from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Font from '@ckeditor/ckeditor5-font/src/font';
const App = () =>  {
  
  return(
    <div className="App">
    <h2>Using CKEditor 5 build in React</h2>
    <CKEditor
        editor={ ClassicEditor }
        data="<p>Hello from CKEditor 5!</p>"
        onReady={ editor => {
            console.log( 'Editor is ready to use!', editor );
        }}
        onChange={ ( event, editor ) => {
            const data = editor.getData();
            console.log( { event, editor, data } );
        }}
        onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
        }}
        onFocus={ ( event, editor ) => {
            console.log( 'Focus.', event, editor );
        }}
        config={{
          plugins: [Essentials, Paragraph, Bold, Font],
          toolbar: ['bold', 'fontcolor']
        }
        }
    />

</div>
  )
  
}

export  default App