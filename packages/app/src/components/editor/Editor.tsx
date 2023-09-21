import { Button, Chip, Textarea, TextInput } from "design-system";
import { useState } from "react";

import {
  buttonContainerStyle,
  closeButtonStyle,
  editorContainerStyle,
  tagContainerStyle,
} from "./Editor.css";

type ArticleType = {
  title: string;
  about: string;
  article: string;
  tags: string[];
};

interface EditorProps {
  defaultValue?: ArticleType;
  onSubmit?: (value: ArticleType) => void;
}

export const Editor = ({ defaultValue, onSubmit = () => {} }: EditorProps) => {
  const [title, setTitle] = useState(defaultValue?.title ?? "");
  const [about, setAbout] = useState(defaultValue?.about ?? "");
  const [article, setArticle] = useState(defaultValue?.article ?? "");
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState<string[]>(defaultValue?.tags ?? []);

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

  const handlePublish = () => {
    if (title !== "" || about !== "" || article !== "") {
      alert("Please fill out all fields");
      return;
    }
    onSubmit({
      title,
      about,
      article,
      tags: tagList,
    });
  };

  // case 1. 입력 후 엔터를 누르면 input이 사라지고, tag가 추가된다.
  // case 2. tag를 클릭하면 삭제된다.
  // case 3. 중복된 tag는 추가되지 않고, input도 비워지지 않는다.
  // case 4. 입력 후 엔터를 누르면 하나의 tag만 추가되는지 테스트
  // case 6. Publish Article을 누르면 채워지지 않은 요소가 있으면 alert를 띄운다.
  // case 7. Publish Article을 누르면 onSubmit 함수가 실행된다.

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
        <Button size="md" onClick={handlePublish}>
          Publish Article
        </Button>
      </div>
    </div>
  );
};
