import { CrownTwoTone, EditTwoTone, LikeTwoTone, StarTwoTone } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import dayjs from 'dayjs'
import './index.scss'

import { Link } from "react-router-dom";
import { useAppSelector } from "@/store";
import { API_NOTE_MY_LIST, API_USER_STATUS } from "@/constant/urls";
import { get } from '@/utils/axios'
import { NoteType, proDataType } from "@/utils/types";

const NoteCard = (props: any) => {
  const {note} = props
  return <div className="note-card">
    <div className="item-hd">
      <div className="title">{note.title}</div>
      <div>{dayjs(note.updated_at).format('YYYY/MM/DD hh:mm:ss')}</div>
    </div>
    <div className="item-ft">      
      <div className="icon">
        <div>点赞&nbsp;<span>{ note.like_num }</span></div>·
        <div>收藏&nbsp;<span>{ note.collect_num }</span></div>·
        <div>评论&nbsp;<span>{ note.comment_num }</span></div>
      </div>
      <div className='btn'>
        <button>浏览</button>
        <button>编辑</button>
        <button>删除</button>
      </div>
    </div>
  </div>
}

const Profile: React.FC = () => {
  const userInfo = useAppSelector(state => state.user.userInfo)
  let [proData, setProData] = useState<proDataType>()
  let [myList, setMyList] = useState<NoteType[]>([])

  const getStatus = async()=> {
    let r = await get(API_USER_STATUS)
    let e = await get(API_NOTE_MY_LIST)
    setProData(r.data)
    setMyList(e.data)
  }

  useEffect(() => {
    getStatus()
  },[])

  return <div className="g-profile">
    <div className="my-status">
      <div className="m-user">
        <div className="avatar">
          <img src={userInfo?.avatar} alt="" />
        </div>
        <div className="user-mes">
          <h2 className="name">{ userInfo?.userName}</h2>
          <p className="blo">BlO：{ userInfo?.desc}</p>
        </div>
        <Link to="/"><button className="btn-edit">编辑</button></Link>
      </div>
      <div className="m-score">
        <div className="hd">| 成就</div>
        <div className="item"><EditTwoTone twoToneColor='#DF4E4E' />发表 {proData?.noteNum} 篇文章</div>
        <div className="item"><LikeTwoTone twoToneColor='#037CD6'/>获得 {proData?.likeNum} 次点赞</div>
        <div className="item"><StarTwoTone twoToneColor='#C174DD'/>获得 {proData?.collectNum} 次收藏</div>
        <div className="item"><CrownTwoTone twoToneColor='#98C379'/>您成为本站会员 1 天</div>
      </div>
    </div>

    <div className="my-list">
      {myList.map((item, i) => 
        <NoteCard key={`myList-${i+1}`} note={item}/>
      )}
    </div>
  </div>;
};

export default Profile;
