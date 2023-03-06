import React from "react";
import Markdown from "@/components/Markdown";
import { API_NOTE_ADD } from '@/constant/urls'

const My: React.FC = () => {
  return (
    <Markdown api={API_NOTE_ADD} />
  );
};

export default My;
