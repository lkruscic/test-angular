import {Component, OnInit} from '@angular/core';
import {DiffEditorModel, NgxEditorModel} from "ngx-monaco-editor-v2";
declare var monaco: any;
@Component({
  selector: 'app-monaco-diff-editor',
  templateUrl: './monaco-diff-editor.component.html',
  styleUrls: ['./monaco-diff-editor.component.scss']
})
export class MonacoDiffEditorComponent implements OnInit {
  editor: any;
  options = {
    theme: 'vs-light', language: 'json'
  };
  model: NgxEditorModel = {
    language: 'json', value: '{a: 3, "b": "abc"}',
  }
  originalModel: DiffEditorModel = {
    code: '{a: 3, "b": "abc"}', language: 'json'
  };

  modifiedModel: DiffEditorModel = {
    code: '{a: 3, "b": "abc"}', language: 'json'
  };
  showMultiple: any;
  code: any;
  codeInput?: string | null  = 'Sample Code';
  private toggleLanguage: boolean = false;
  cssCode = `.my-class {
  color: red;
}`;
  jsCode = `function hello() {
	 alert('Hello world!');
}`;

  constructor() {

  }

  ngOnInit(): void {
    this.model.value = '{a: 44443, "b": "abc"}';
    this.updateOptions();
  }

  onInit(editor:any) {
    this.editor = editor;
    console.log(editor);
    // this.model = {
    //   value:  '{a: 44443, "b": "777777"}', language: 'json', uri: monaco.Uri.parse('a://b/foo.json')
    // };
  }

  onInitDiffEditor($event: any) {

  }

  updateOptions() {
    this.toggleLanguage = !this.toggleLanguage;
    if (this.toggleLanguage) {
      this.code = this.cssCode;
      this.options = Object.assign({}, this.options, { language: 'java' });
    } else {
      this.code = this.jsCode;
      this.options = Object.assign({}, this.options, { language: 'javascript' });
    }

  }

  updateDiffModel() {
    this.originalModel = Object.assign({}, this.originalModel, { code: 'abcd' });
    this.modifiedModel = Object.assign({}, this.originalModel, { code: 'ABCD ef' });
  }
}

