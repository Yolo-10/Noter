import React from "react";
import ICON from "@/assets/img"
import { rTime } from '@/utils/fn'
import { NoteCardType } from '@/utils/types'
import './index.scss'

const NoteCard: React.FC<NoteCardType> = (props: any) => {
    const { note } = props
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
export default NoteCard