import React, { useState } from 'react'
import { svgLfIcons, svgLfText, svgRtIcons, svgRtText } from './icon/index'
import { marked } from 'marked'
import hljs from 'highlight.js/lib/core'
import './github.css'
import './index.scss'

const Markdown: React.FC = () => {
  const [prev, setPreV] = useState('');

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: code => hljs.highlightAuto(code, ['js']).value
  }); 

  const click = () => {
    console.log(111)
  }
  
  const doInsPre = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
     setPreV(marked((e.target as HTMLTextAreaElement).value))
  }

  return <div className='md-editor'>
    <div className="md-editor-toolbar">
      <ul>
        {svgLfText.map((item, i) =>
          <li key={`svgLfIcon-${i}`} className="m-icon" onClick={click}>
            <img src={svgLfIcons[i]} />
            <span>{item}</span>
          </li>)}
      </ul>
      <ul>
        {svgRtText.map((item, i) =>
            <li key={`svgRtIcon-${i}`} className="m-icon">
              <img src={svgRtIcons[i]} />
              <span>{item}</span>
            </li>)}
      </ul>
    </div>
    <div className="md-editor-content">
      <textarea className="md-editor-input" spellCheck="false"
        onKeyUp={e=>doInsPre(e)}
        defaultValue=""/>
      <div className="md-editor-preview" dangerouslySetInnerHTML={{__html:prev}}></div>
    </div>
  </div>
}

export default Markdown