import { Chip, Text, TextInput, XDeleteIcon } from "design-system";
import { useState } from "react";

import { tagListStyle } from "./TagSelector.css";

export const TagSelector = () => {
  const [tagInput, setTagInput] = useState("");
  const [tagList, setTagList] = useState<string[]>([]);

  const handleTagInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTagInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing === false && e.key === "Enter") {
      if (tagList.includes(tagInput)) {
        return;
      }

      setTagInput("");
      setTagList([...tagList, tagInput]);
    }
  };

  return (
    <>
      <TextInput
        value={tagInput}
        onChange={handleTagInputChange}
        placeholder="Enter tags"
        onKeyDown={handleKeyDown}
      />
      <div className={tagListStyle}>
        {tagList.map((tag) => (
          <Chip variant="contained" key={tag}>
            <XDeleteIcon
              size="1.2rem"
              style={{ marginRight: "0.2rem" }}
              onClick={() => {
                setTagList(tagList.filter((t) => t !== tag));
              }}
            />

            <Text style={{ lineHeight: 0 }}>{tag}</Text>
          </Chip>
        ))}
      </div>
    </>
  );
};
