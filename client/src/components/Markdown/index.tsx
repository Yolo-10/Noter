import React, { useEffect, useRef, useState } from 'react'
import { svgS } from './icon/index'
import { marked } from 'marked'
import hljs from 'highlight.js'
import './github.css'
import './index.scss'

interface svgType {
  svgIcon: any,
  svgIntro: string,
  lfChar: string,
  rtChar: string,
  str:string,
}

const Markdown: React.FC = () => {
  let scrolling = 0, timer1: any = null,timer2: any = null;
  const [inpV,setInpV] = useState('')
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

  const doClick = (item: svgType) => {
    // 获取光标位置
    let selSt = refInput.current?.selectionStart || 0
    let selEn = refInput.current?.selectionEnd || 0
    // textarea新文字
    let str = inpV.slice(0, selSt) + item.lfChar
      + (selSt === selEn ? item.str : inpV.slice(selSt, selEn))
      + item.rtChar + inpV.slice(selEn)
    // 新光标需要体谅的位置下标
    let newSelSt = selSt + item.lfChar.length;
    let newSelEd = selEn + item.lfChar.length + (selSt === selEn ? item.str.length : 0)
    
    /**
    setInpV是异步操作，setInpV导致inpV改变，组件重新render了一次
    如果不使用setTimeout开启异步操作,程序会先setSelectionRange后再render
    使得光标选择的消失了，就没有效果了
    而setTimeout开启一个定时器,就要及时去除定时器,否则当定时器过多时会引起内存泄露
    */
    if(timer2) clearTimeout(timer2)
    timer2 = setTimeout(() => {
      refInput.current?.focus()
      refInput.current?.setSelectionRange(newSelSt, newSelEd)
      clearTimeout(timer2)
    }, 50)
    setInpV(str)
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
    if(timer1) clearTimeout(timer1)
    timer1 = setTimeout(() => {
      scrolling = 0
      clearTimeout(timer1)
    },200)
  }
  
  const doInsPre = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInpV(e.target.value)
  }

  useEffect(() => {
    setPreV(marked(inpV))
  }, [inpV])

  return <div className='md-editor'>
    <div className="md-editor-toolbar">
      <ul>
        {svgS.map((item, i) =>
            <li key={i} className="m-icon"
              onClick={()=>doClick(item)}>
             <img src={item.svgIcon} />
              <span>{ item.svgIntro}</span>
          </li>)}
      </ul>
      <ul>
        {/* {svgRtText.map((item, i) =>
            <li key={`svgRtIcon-${i}`} className="m-icon">
              <img src={svgRtIcons[i]} />
              <span>{item}</span>
            </li>)} */}
      </ul>
    </div>
    <div className="md-editor-content">
      <textarea
        ref={refInput}
        className="md-editor-input"
        spellCheck="false"
        value={inpV}
        onChange = {e => doInsPre(e)}
        onScroll={e =>doSynScroll(e,1)} />
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