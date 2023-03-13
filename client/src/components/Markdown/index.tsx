import React, { useEffect, useRef, useState } from 'react'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { message } from 'antd'
import { post } from '@/utils/axios'
import { svgLf ,svgCe, svgRt } from './icon/index'
import './github.css'
import './index.scss'

/**
 * Markdown组件
 * 已完成：实时渲染、同步滚动、工具栏、附件上传、标题栏字数
 * 有待改进：编辑区滚动条光标样式更改成箭头；编辑区##符号颜色灰色；
 * 有待改进：预览区代办todo框前的点；换行自动继续之前的格式
 */
interface svgType {
  svgIcon: any,
  svgIntro: string,
  lfChar: string,
  rtChar: string,
  str:string,
}

interface mdType {
  api: string,
}

const Markdown: React.FC<mdType> = (props) => {
  let scrolling = 0, timer1: any = null, timer2: any = null;
  const [scr, setScr] = useState(1)
  const [title,setTle] = useState('【无标题】')
  const [inpV, setInpV] = useState('')
  const [preV, setPreV] = useState('')
  const [fileList, setFileList] = useState<File[]>([])
  const txtAreRef = useRef<HTMLTextAreaElement | null>(null)
  const preRef = useRef<HTMLDivElement | null>(null)
  const fileRef = useRef<HTMLInputElement | null>(null)

  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true, //使用更为时髦的标点，比如在引用语法中加入破折号
    pedantic: false, // 尽可能地兼容 markdown.pl的晦涩部分。不纠正原始模型任何的不良行为和错误。
    sanitize: false, 
    breaks: true, //允许回车换行
    smartLists: true, 
    smartypants: true, //使用更为时髦的标点，比如在引用语法中加入破折号
    highlight: code => hljs.highlightAuto(code).value
  }); 

  // 实时渲染
  const doInsPre = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInpV(e.target.value)
  }

  // 同步滚动
  const doSynScroll = (e: any, obj: number) => {
    if (scrolling === 0) scrolling = obj
    else if (scrolling !== obj) return

    let { scrollTop, scrollHeight } = (e.target);
    let scale = scrollTop / scrollHeight;
    obj === 1? driveScroll(scale,preRef):driveScroll(scale,txtAreRef)
  }
  const driveScroll = (scale: number, obj: any) => {
    let sH = (preRef.current?.scrollHeight || 0) * scale;
    obj.current?.scrollTo({ top: sH })
    if(timer1) clearTimeout(timer1)
    timer1 = setTimeout(() => {
      scrolling = 0
      clearTimeout(timer1)
    },200)
  }

  // markdown语法Item点击事件
  const doAddMd = (item: svgType) => {
    // 获取光标位置
    let selSt = txtAreRef.current?.selectionStart || 0
    let selEn = txtAreRef.current?.selectionEnd || 0
    // textarea新文字
    let str = inpV.slice(0, selSt) + item.lfChar
      + (selSt === selEn ? item.str : inpV.slice(selSt, selEn))
      + item.rtChar + inpV.slice(selEn)
    // 新光标需要提亮的位置下标
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
      txtAreRef.current?.focus()
      txtAreRef.current?.setSelectionRange(newSelSt, newSelEd)
      clearTimeout(timer2)
    }, 50)
    setInpV(str)
  }

  // 分屏事件
  const doChgScr = (scr: number) => {
    setScr(scr)
  }

  // 保存
  const doSave = async() => {
    await doPostAjax(1)
  }

  // 提交
  const doSubmit = async() => {
    await doPostAjax(2)
    // window.location.href = '/profile'
  }

  // 保存/提交的请求
  const doPostAjax = async (type: number) => {
    if (title.length === 0 || inpV.length === 0) {
      alert('请填写完数据')
      return
    }
    const r = await post(props.api, { title, raw: inpV, html: preV, fileList, status: type })
    message.success(r.message)
    window.location.href='/'
  }

  // 弹出选择文件的框框
  const doPopUpload = () => {
    fileRef.current?.click()
  }

  // 增加附件
  const doAddFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let arr = []
    if (e.target.files) {
      arr = Object.values(e.target.files)
      setFileList([...arr,...fileList])
    }
  }

  // 删除附件
  const doDelFile = (index: number) => {
    let newList = fileList.filter((item, i) => i !== index)
    setFileList(newList)
  }

  useEffect(() => {
    setPreV(marked(inpV))
  }, [inpV])
  
  return <div className='md-editor'>
    <div className="md-editor-title">
      标题：<input required name="title" type="text" placeholder='请输入标题' 
      value={title} maxLength={32} 
        onChange={(e) => setTle(e.target.value)}/>
      <span>{title.length}/32</span>
    </div>
    <div className="md-editor-toolbar">
      <ul>
        {svgLf.map((item, i) =>
            <li key={`svgLfIcon-${i}`} 
              onClick={()=>doAddMd(item)}>
            <img src={item.svgIcon} />
              { item.svgIntro}
        </li>)}
        <li style={{margin:'0 15px'}}>|</li>
        <li onClick={doPopUpload}><img src={svgCe[0].svgIcon} />{svgCe[0].svgIntro}
          <input ref={fileRef} type="file" multiple
            accept=".png,jpeg,.zip,.txt,.md"
            onChange={e=>doAddFile(e)}
            style={{ display: 'none' }} />
        </li>
        <li onClick={doSave} ><img src={svgCe[1].svgIcon}/>{svgCe[1].svgIntro}</li>
        <li onClick={doSubmit}><img src={svgCe[2].svgIcon} />{svgCe[2].svgIntro}</li>
      </ul>
      <ul>
        {svgRt.map((item,i) => 
          <li key={`svgRtIcon-${i}`} onClick={()=>doChgScr(i)}>
            <img src={item.svgIcon} />{item.svgIntro}</li>)}
      </ul>
    </div>
    <div className="md-editor-content">
    <textarea
        required
        name="raw"
        ref={txtAreRef}
        className={scr!==2? "md-editor-input":"md-editor-input hide"}
        spellCheck="false"
        value={inpV}
        onChange = {e=>doInsPre(e)}
        onScroll={e=>doSynScroll(e,1)} />
      <div
        ref={preRef}
        className={scr!==0? "md-editor-preview":"md-editor-preview hide"}
        onScroll={e=>doSynScroll(e,2)}
        dangerouslySetInnerHTML={{ __html: preV }}>
      </div>
    </div>
    <div className="md-editor-footer">
      <div className="m-info">附件列表</div>
      {fileList.map((item, i) =>
        <div className='m-item' key={`fileList-${item.lastModified}`}>
          <a href="">{item.name}</a> 
          <span onClick={()=>doDelFile(i)}>x</span>
        </div>
      )}
    </div>
</div>
}

export default Markdown