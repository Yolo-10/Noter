import React, { useRef, useState } from 'react'
import { svgLfIcons, svgLfText, svgRtIcons, svgRtText } from './icon/index'
import { marked } from 'marked'
import hljs from 'highlight.js'
import './github.css'
import './index.scss'

const Markdown: React.FC = () => {
  let scrolling = 0, timer: any = null;
  const [prev, setPreV] = useState('')
  const refInput = useRef<HTMLTextAreaElement | null>(null)
  const refPre = useRef<HTMLDivElement | null>(null)

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: true,
    smartLists: true,
    smartypants: true,
    highlight: code => hljs.highlightAuto(code).value
  }); 

  const click = () => {
    console.log(111)
  }

  const doSynScroll = (e: any, obj: number) => {
    if (scrolling === 0) scrolling = obj
    else if (scrolling !== obj) return

    let { scrollTop, scrollHeight } = (e.target);
    let scale = scrollTop / scrollHeight;
    obj === 1? driveScroll(scale,refPre):driveScroll(scale,refInput)
  }

  const driveScroll = (scale:number,obj:any) => {
    let sH = (refPre.current?.scrollHeight || 0) * scale;
    obj.current?.scrollTo({ top: sH })
    if(timer) clearTimeout(timer)
    timer = setTimeout(() => {
      scrolling = 0
      clearTimeout(timer)
    },200)
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
      <textarea
        ref={refInput}
        className="md-editor-input"
        spellCheck="false"
        onKeyUp={e => doInsPre(e)}
        onScroll={e =>doSynScroll(e,1)}
        defaultValue="" />
      <div
        ref={refPre}
        className="md-editor-preview"
        onScroll={e =>doSynScroll(e,2)}
        dangerouslySetInnerHTML={{ __html: prev }}>
      </div>
    </div>
  </div>
}

export default Markdown