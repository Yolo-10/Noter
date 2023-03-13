import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import './index.scss'

import ICON from "@/assets/img";
import { get } from "@/utils/axios";
import { rTime, scrollToTop } from "@/utils/fn";
import { API_NOTE_HOT_LIST, API_NOTE_LIST } from "@/constant/urls";
import { HOME_TAB } from "@/constant/config";

interface NoteType {
  id: number,
  avatar: string,
  user_name: string,
  title: string,
  raw: string,
  html: string,
  cover:string,
  like_num: number,
  collect_num: number,
  comment_num: number,
  created_at: string,
}

const NoteCard = (props: any) => {
  const {note} = props
  return <div className="note-card">
    <div className="item-hd">{ note.title }</div>
    <div className="item-bd">
      <div className="bdc-lt">
        <span>{note.raw}</span>
      </div>
      <div className="bdc-rt">
        {note.cover && <img src={note.cover} alt="" />}
      </div>
    </div>
    <div className="item-ft">
      <div className='user'>
        <img className='user-icon' src={ note.avatar } alt='' />
        <span className='username'>{ note.user_name }</span>
        <span className='update-time'>{rTime(note.updated_at)}</span>
      </div>
      
      <div className="icon">
        <div>
          <img src={ICON.thumb} alt='' />
          <span>{ note.like_num }</span>
        </div>
        <div>
          <img src={ICON.bookmark} alt='' />
          <span>{ note.collect_num }</span>
        </div>
        <div>
          <img src={ICON.comment} alt='' />
          <span>{ note.comment_num }</span>
        </div>
      </div>
    </div>
  </div>
}

const Home: React.FC = () => {
  const [tab,setTab] = useState(0)
  const [noteList, setNoteList] = useState<NoteType[]>([])
  const [hotList, setHotList] = useState<NoteType[]>([])
  
  const fetchList = async () => {
    const r = await get(API_NOTE_LIST);
    const t = await get(API_NOTE_HOT_LIST);
    setNoteList(r.data)
    setHotList(t.data)
  }
  
  useEffect(() => {
    fetchList()
  },[])

  return (
    <div className="g-home">
      <div className="m-home-tab">
        <ul>
          {HOME_TAB.map((item, i) => 
            <li key={`subTab-${i}`} onClick={() => setTab(i)}
              className={tab === i ? `active` : ''}>
              {item}</li>)}
        </ul>
      </div>

      <div className="m-home">
        <div>
          {(tab===1) && <div className="m-tags-wrap">
            <span className="m-tag"># <span>test</span></span>
            <span className="m-tag"># <span>test</span></span>
            <span className="m-tag"># <span>test</span></span>
          </div>}
          <div className="note-list">
            {(noteList.length===0) && <div className='no-data'>没有更多数据 😯</div>}
            {(noteList.length > 0) && noteList.map((item) =>
              <NoteCard key={`noteItem-${item.id}`} note={item} />)}
          </div>
        </div>

        <div className="home-right-bar">
          <div className="title">最热·精选🔥</div>
          <div className="hot-list">
            {(hotList.length===0) && <div className='no-data'>没有更多数据 😯</div>}
            {(hotList.length>0) && hotList.map((item) =>
              <div key={`hotItem-${item.id}`} className="m-item">
                <div className="avatar">
                  <img src={item.avatar} alt="" />
                </div>
                <div className="info">
                  <div className="item-author">{item.user_name}</div>
                  <span className="item-title">{item.title}</span>
                </div>
            </div>)}
          </div>
        </div>
      </div>

      <div className='m-fixBar'>
        <Link to="/write"><img src={ICON.edit}/></Link>
        <img src={ICON.backTop} alt="" style={{ marginTop: '15px' }} onClick={scrollToTop} />
      </div>
    </div>
  );
};

export default Home;
