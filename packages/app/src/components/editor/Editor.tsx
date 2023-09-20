import { Button, Chip, Textarea, TextInput } from "design-system";
import React, { useState } from "react";

import {
  buttonContainerStyle,
  closeButtonStyle,
  editorContainerStyle,
  tagContainerStyle,
} from "./Editor.css";

export const Editor = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [article, setArticle] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeAbout = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAbout(e.target.value);
  };

  const handleChangeArticle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle(e.target.value);
  };

  const handleChangeTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing === false && e.key === "Enter") {
      if (tagList.includes(tagInput)) return;
      setTagInput("");
      setTagList([...tagList, tagInput]);
    }
  };

  // case 1. 입력 후 엔터를 누르면 input이 사라지고, tag가 추가된다.
  // case 2. tag를 클릭하면 삭제된다.
  // case 3. 중복된 tag는 추가되지 않고, input도 비워지지 않는다.
  // case 4. 입력 후 엔터를 누르면 하나의 tag만 추가되는지 테스트

  return (
    <div className={editorContainerStyle}>
      <TextInput
        value={title}
        onChange={handleChangeTitle}
        placeholder="Article Title"
      />
      <TextInput
        value={about}
        onChange={handleChangeAbout}
        placeholder="What's this article abount?"
      />
      <Textarea
        value={article}
        onChange={handleChangeArticle}
        placeholder="Write your article (in markdown)"
        rows={8}
      />
      <div>
        <TextInput
          value={tagInput}
          onChange={handleChangeTagInput}
          placeholder="Enter tags"
          onKeyDown={handleOnKeyPress}
        />
        <div className={tagContainerStyle}>
          {tagList.map((tag) => (
            <Chip variant="contained" key={tag}>
              <div
                className={closeButtonStyle}
                onClick={() => {
                  setTagList(tagList.filter((t) => t !== tag));
                }}
              >
                x
              </div>
              {tag}
            </Chip>
          ))}
        </div>
      </div>
      <div className={buttonContainerStyle}>
        <Button size="md">Publish Article</Button>
      </div>
    </div>
  );
};
