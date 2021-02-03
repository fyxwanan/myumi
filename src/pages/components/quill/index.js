/*
 * @Author: xiaoreya
 * @Date: 2021-01-07 11:29:24
 * @Description: 
 */

import React, { useState, useEffect } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import dJSON from 'dirty-json-ie11';

const richTextNullMap = [
  '{"ops":[{"insert":"\\n"}]}',
  '{"ops":[{"insert":"\n"}]}',
  '{"ops":[{"insert":""}]}',
  '{"ops":[]}',
  'null',
  '{}',
  '[]',
  null,
];

const IEVersion = () => {
  var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
  var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
  var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
  if (isIE) {
    var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion == 7) {
      return 7;
    } else if (fIEVersion == 8) {
      return 8;
    } else if (fIEVersion == 9) {
      return 9;
    } else if (fIEVersion == 10) {
      return 10;
    } else {
      return 6;//IE版本<=7
    }
  } else if (isEdge) {
    return 'edge';//edge
  } else if (isIE11) {
    return 11; //IE11  
  } else {
    return -1;//不是ie浏览器
  }
}

console.log('-----------')

class MyQuill extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // quillValue: `{"ops":[{"insert":" \n"}]}`,
      // quillValue: `{"ops":[{"insert":""}]}`,
      quillValue: `{"ops":[]}`,
    }
  }

  renderQuillDefaultValue = (defaultValue) => {
    console.log('11dJSON.parse(defaultValue).ops ===>', dJSON.parse(defaultValue).ops, 'defaultValue ===>', defaultValue)
    if (richTextNullMap.includes(defaultValue)) {
      console.log('1')
      return dJSON.parse(`{"ops":[{"insert":"\&nbsp;"}]}`).ops;
    }
    console.log('2')
    return dJSON.parse(defaultValue).ops;
  }

  render() {
    const { quillValue } = this.state;
    return (
      <div
      >
        <ReactQuill
          ref={quill => this._quill = quill}
          theme="snow" 
          // defaultValue={dJSON.parse(quillValue).ops}
          defaultValue={this.renderQuillDefaultValue(quillValue)}
          onChange={(content, delta, source, editor) => {
            console.log('content', content, 'delta ===>', delta, 'source ===>', source)
            console.log('左边的值  editor.getContents()的值', JSON.stringify(editor.getContents()))
            console.log('判断  是否一样', richTextNullMap.includes(JSON.stringify(editor.getContents())))
            debugger;
            if (richTextNullMap.includes(JSON.stringify(editor.getContents()))) {
              if (this._quill) {
                const quill = this._quill.getEditor();
                quill.setText(' ')
              }
              debugger;
              this.setState({
                quillValue: `{"ops":[{"insert":""}]}`
              })
            } else {
              if (this._quill) {
                const quill = this._quill.getEditor();
              }
              this.setState({
                quillValue: editor.getContents().ops
              })
            }
          }}
        />
      </div>
    );
  }
}

export default MyQuill;