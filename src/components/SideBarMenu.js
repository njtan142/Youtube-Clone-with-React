import React from "react";
import styled from "styled-components";
import MenuHeader from "./MenuHeader";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ShortsIcon } from "./icons/shorts.svg";
import { ReactComponent as SubscriptionsIcon } from "./icons/supscriptions.svg";
import { ReactComponent as LibraryIcon } from "./icons/library.svg";
import { ReactComponent as HistoryIcon } from "./icons/history.svg";
import { ReactComponent as YourVideosIcon } from "./icons/your_videos.svg";
import { ReactComponent as YourMoviesIcon } from "./icons/your_movies.svg";
import { ReactComponent as WatchLaterIcon } from "./icons/watch_later.svg";
import { ReactComponent as ShowMoreIcon } from "./icons/show-more.svg";

export default function SideBarMenu({ openCallback, onMenuClick }) {
  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZCGFDrC8YeednlJC3mhxPfg_s4Pg8u7-kf6dy88&s";

  return (
    <Container isOpen={openCallback}>
      <div className="menu-header-container">
        <MenuHeader onMenuClick={onMenuClick} />
      </div>
      <MenusContainer>
        <div className="guided-section">
          <MenuItem svg={<HomeIcon />} name={"Home"} isSelected={true} />
          <MenuItem svg={<ShortsIcon />} name={"Shorts"} />
          <MenuItem svg={<SubscriptionsIcon />} name={"Subscriptions"} />
          <hr />
          <MenuItem svg={<LibraryIcon />} name={"Library"} />
          <MenuItem svg={<HistoryIcon />} name={"History"} />
          <MenuItem svg={<YourVideosIcon />} name={"Your Videos"} />
          <MenuItem svg={<YourMoviesIcon />} name={"Your Movies"} />
          <MenuItem svg={<WatchLaterIcon />} name={"Watch Later"} />
          <MenuItem svg={<ShowMoreIcon />} name={"Show More"} />
        </div>
        <hr />
        <div className="subscriptions">
          <h3>Subscriptions</h3>
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Channel Placeholder"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Channel Placeholder"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Channel Placeholder"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Channel Placeholder"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Channel Placeholder"}
          />
          <MenuItem svg={<ShowMoreIcon />} name={"Show 99 More"} />
        </div>
        <hr />
        <div className="explore">
          <h3>Explore</h3>
          <MenuItem svg={<LibraryIcon />} name={"Library"} />
          <MenuItem svg={<HistoryIcon />} name={"History"} />
          <MenuItem svg={<YourVideosIcon />} name={"Your Videos"} />
          <MenuItem svg={<YourMoviesIcon />} name={"Your Movies"} />
          <MenuItem svg={<WatchLaterIcon />} name={"Watch Later"} />
          <MenuItem svg={<ShowMoreIcon />} name={"Show More"} />
        </div>
        <hr />

        <div className="more-from-youtube">
          <h3>More from Youtube</h3>
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Youtube Premium"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Youtube Studio"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Youtube Music"}
          />
          <MenuItem
            svg={<CircularImage url={defaultProfileImage} />}
            name={"Youtube Kids"}
          />
        </div>
        <hr />

        <div className="others">
          <MenuItem svg={<LibraryIcon />} name={"Settings"} />
          <MenuItem svg={<HistoryIcon />} name={"Report History"} />
          <MenuItem svg={<YourVideosIcon />} name={"Help"} />
        </div>
      </MenusContainer>
    </Container>
  );
}

function MenuItem({ svg, name, isSelected }) {
  return (
    <MenuItemContainer isSelected={isSelected}>
      {svg}
      <p>{name}</p>
    </MenuItemContainer>
  );
}

function CircularImage({ url }) {
  return <img className="circular-yt-profile" src={url} />;
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 40px;
  padding: 0px 12px;
  box-sizing: border-box;
  border-radius: 10px;

  font-size: 14px;
  background-color: ${({ isSelected }) => (isSelected ? "#f1f1f1" : "none")};

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  p {
    margin: 0px;
    margin-left: 24px;
    font-family: "Roboto", sans-serif;
    font-weight: ${({ isSelected }) => (isSelected ? "600" : "normal")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const MenusContainer = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding-right: 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* For Webkit-based browsers (Chrome, Safari) */
  &::-webkit-scrollbar {
    width: 5px; /* Set the width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Make the scrollbar track transparent */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Set the color of the scrollbar thumb */
    border-radius: 6px; /* Add rounded corners to the thumb */
  }

  .guided-section {
    display: flex;
    flex-direction: column;
    padding: 12px;
  }

  hr {
    width: 90%;
    border-color: #ffffff;
    margin: 10px;
    margin-left: -10px;
  }
  .guided-section {
    hr {
      width: 100%;
      margin-left: -2px;
    }
  }
  .circular-yt-profile {
    width: 24px;
    aspect-ratio: 1;
    border-radius: 50%;
  }

  .subscriptions,
  .explore,
  .more-from-youtube {
    h3 {
      font-weight: normal;
      font-size: 16px;
      padding: 6px 12px 4px;
      margin: 0px;
      font-family: "Roboto", sans-serif;
    }
  }
`;

const Container = styled.div`
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "0" : "-240px")};
  top: 0;
  width: 240px;
  height: 100vh;
  transition: left 0.3s ease-in-out;
  background-color: #fcfcfc;
  .menu-header-container {
    height: 60px;
    padding-left: 10px;
  }
  box-sizing: border-box;
  padding-bottom: 5em;
`;
