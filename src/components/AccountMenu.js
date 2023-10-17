import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as ShortsIcon } from "./icons/shorts.svg";
import { ReactComponent as SubscriptionsIcon } from "./icons/supscriptions.svg";
import { ReactComponent as LibraryIcon } from "./icons/library.svg";
import { ReactComponent as HistoryIcon } from "./icons/history.svg";
import { ReactComponent as YourVideosIcon } from "./icons/your_videos.svg";
import { ReactComponent as YourMoviesIcon } from "./icons/your_movies.svg";
import { ReactComponent as WatchLaterIcon } from "./icons/watch_later.svg";
import { ReactComponent as ShowMoreIcon } from "./icons/show-more.svg";

export default function AccountMenu({ profileURL, toggleCallback }) {
  const componentRef = useRef(null);
  const [isListenerActive, setIsListenerActive] = useState(false);

  useLayoutEffect(() => {
    const handleClick = (e) => {
      if (componentRef.current && componentRef.current.contains(e.target)) {
      } else {
        document.removeEventListener("click", handleClick);
        toggleCallback();
      }
    };

    if (!isListenerActive) {
      setTimeout(() => {
        setIsListenerActive(true);
        document.addEventListener("click", handleClick);
      }, 10);
    }

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [isListenerActive]);

  return (
    <Container ref={componentRef}>
      <div className="account-banner">
        <div>
          <img src={profileURL} />
        </div>
        <div>
          <p>Account Name</p>
          <p>@{"placeholder"}</p>
          <div className="account-manage-link">
            <a href="">Manage your Google Account</a>
          </div>
        </div>
      </div>
      <hr />
      <div className="menus">
        <MenuItem svg={<HomeIcon />} name={"Your Channel"} />
        <MenuItem svg={<HomeIcon />} name={"Youtube Studio"} />
        <MenuItem
          svg={<HomeIcon />}
          name={"Switch Account"}
          hasOptions={true}
        />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <hr />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <hr />
        <MenuItem
          svg={<HomeIcon />}
          name={"Switch Account"}
          hasOptions={true}
        />
        <MenuItem
          svg={<HomeIcon />}
          name={"Switch Account"}
          hasOptions={true}
        />
        <MenuItem
          svg={<HomeIcon />}
          name={"Switch Account"}
          hasOptions={true}
        />
        <MenuItem
          svg={<HomeIcon />}
          name={"Switch Account"}
          hasOptions={true}
        />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <hr />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <hr />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
        <MenuItem svg={<HomeIcon />} name={"Sign out"} />
      </div>
    </Container>
  );
}

function MenuItem({ svg, name, isSelected, hasOptions }) {
  return (
    <MenuItemContainer isSelected={isSelected}>
      <div>
        {svg}
        <p>{name}</p>
      </div>

      {hasOptions && <ShowMoreIcon className="more-options" />}
    </MenuItemContainer>
  );
}

const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  height: 40px;
  padding: 0px 36px 0 16px;
  box-sizing: border-box;

  font-size: 14px;
  background-color: ${({ isSelected }) => (isSelected ? "#f1f1f1" : "none")};

  div:first-child {
    display: flex;
    align-items: center;
  }

  &:hover {
    background-color: #f1f1f1;
    cursor: pointer;
  }

  p {
    margin: 0px;
    margin-left: 16px;
    font-size: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: ${({ isSelected }) => (isSelected ? "600" : "normal")};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Container = styled.div`
  position: absolute;
  right: -10px;
  top: 42px;
  width: 300px !important;
  height: calc(100vh - 60px) !important;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;

  box-shadow: 0px 0px 71px 12px rgba(0, 0, 0, 0.13);

  .account-banner {
    padding: 16px;
    display: flex;
    font-family: "Roboto", sans-serif;

    img {
      width: 40px;
      aspect-ratio: 1;
      border-radius: 50%;
      margin-right: 16px;
    }
    p {
      margin: 0px;
      font-size: 16px;
      line-height: 22px;
    }
    a {
      font-size: 14px;
      text-decoration: none;
      color: rgb(6, 95, 212);
    }
    .account-manage-link {
      margin-top: 8px;
    }
  }

  hr {
    width: 100%;
    opacity: 40%;
    margin: 6px 0px;
  }
`;
