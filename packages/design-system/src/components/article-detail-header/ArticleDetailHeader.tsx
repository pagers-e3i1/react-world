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
  const { username, image, following } = author;
  const [isFavorited, setIsFavorited] = useState(favorited);
  const [isFollowing, setIsFollowing] = useState(following);
  const currentFavoritesCount = favoritesCount + Number(isFavorited);

  return (
    <div className={articleHeaderContainer}>
      <h1 className={articleHeaderTitle}>{title}</h1>
      <div className={articleMeta}>
        <div className={authorWrapper}>
          <a href={`#@${username}`}>
            <Avatar src={image} width={30} height={30} />
          </a>
          <div className={authorInfo}>
            <a href={`#@${username}`} className={authorUserName}>
              {username}
            </a>
            <span>{getFormattedDate(updatedAt)}</span>
          </div>
        </div>

        <div className={articleButtons}>
          <button
            data-testid="FollowingButton"
            onClick={() => {
              setIsFollowing(!isFollowing);
            }}
          >
            {isFollowing ? "Unfollow" : "Follow"} {username}
          </button>
          <button
            data-testid="FavoriteButton"
            onClick={() => {
              setIsFavorited(!isFavorited);
            }}
          >
            {isFavorited ? "Unfavorite" : "Favorite"} Article (
            {currentFavoritesCount})
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailHeader;
