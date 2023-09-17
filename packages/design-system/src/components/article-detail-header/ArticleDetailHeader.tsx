import { Avatar } from "components";
import { useState } from "react";
import { getFormattedDate } from "utils/date.util";

import {
  articleButtons,
  articleHeaderContainer,
  articleHeaderTitle,
  articleMeta,
  authorInfo,
  authorUserName,
  authorWrapper,
} from "./ArticleDetailHeader.css";

interface ArticleDetailHeaderProps {
  title: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    image: string;
    following: boolean;
  };
}

const ArticleDetailHeader = ({
  title,
  updatedAt,
  favorited,
  favoritesCount,
  author,
}: ArticleDetailHeaderProps) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  const [isFollowing, setIsFollowing] = useState(author.following);
  const currentFavoritesCount = favoritesCount + Number(isFavorited);

  return (
    <div className={articleHeaderContainer}>
      <h1 className={articleHeaderTitle}>{title}</h1>
      <div className={articleMeta}>
        <div className={authorWrapper}>
          <a href={`#@${author.username}`}>
            <Avatar src={author.image} width={30} height={30} />
          </a>
          <div className={authorInfo}>
            <a href={`#@${author.username}`} className={authorUserName}>
              {author.username}
            </a>
            <span>{getFormattedDate(updatedAt)}</span>
          </div>
        </div>

        <div className={articleButtons}>
          <div
            onClick={() => {
              setIsFollowing(!isFollowing);
            }}
          >
            {isFollowing ? "Unfollow" : "Follow"} {author.username}
          </div>
          <div
            onClick={() => {
              setIsFavorited(!isFavorited);
            }}
          >
            {isFavorited ? "Unfavorite" : "Favorite"} Article (
            {currentFavoritesCount})
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailHeader;
