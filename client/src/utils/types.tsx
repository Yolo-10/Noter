export interface NoteType {
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

export interface NoteCardType {
    note: NoteType
}

export interface userType {
    id: number;
    userName: string;
    email: string;
    avatar: string;
    githubId: number;
    realName: string;
    desc: string;
    password: string;
}
  
export interface userStateType {
    userInfo: userType | undefined;
}

export interface proDataType {
    noteNum: number,
    likeNum: number,
    collectNum: number,
}
