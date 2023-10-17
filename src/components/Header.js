import styled from "styled-components";
import MenuHeader from "./MenuHeader";
import React, { useState, useEffect } from "react";
import { ReactComponent as SearchIcon } from "./icons/search.svg";
import { ReactComponent as VoiceIcon } from "./icons/voicetype.svg";
import { ReactComponent as UploadIcon } from "./icons/upload.svg";
import { ReactComponent as NotificationIcon } from "./icons/notifications.svg";
import { ReactComponent as CancelIcon } from "./icons/cancel.svg";
import { ReactComponent as SignInIcon } from "./icons/sign_in.svg";
import {useNavigate} from "react-router-dom"

import AccountMenu from "./AccountMenu";

import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const appId = "32ec84e1-e1d5-4c8f-8389-0906db691124";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

export default function Header({ onMenuClick, isSignedIn }) {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState("");

  const navigate = useNavigate();

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const toggleListening = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      return;
    }
    resetTranscript();
    SpeechRecognition.startListening({ continuous: true });
  };

  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (transcript) {
      setSearchValue(transcript);
    }
  }, [transcript]);

  const handleClear = () => {
    setSearchValue(""); // Step 4: Clear the input field
  };
  const handleClick = () => {
    alert("Button Clicked!");
  };

  const handleGoToSignIn = ()=>{
    navigate("/login")
  }

  const defaultProfileImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfZCGFDrC8YeednlJC3mhxPfg_s4Pg8u7-kf6dy88&s";
  return (
    <Container>
      <MenuHeader onMenuClick={onMenuClick} />
      <SearchHeader>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Youtube clone"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && (
            <div className="clear-button" onClick={handleClear}>
              <CancelIcon />
            </div>
          )}

          <div className="search-button">
            <SearchIcon />
          </div>
        </div>
        <button
          className={
            "speech-to-text " + (listening ? "speech-to-text-active" : "")
          }
          onMouseDown={toggleListening}
        >
          <VoiceIcon />
        </button>
      </SearchHeader>
      {isSignedIn ? (
        <AccountHeaderSignedIn>
          <div className="upload-button">
            <UploadIcon />
          </div>
          <div className="notification-button">
            <NotificationIcon />
          </div>
          <div className="profile-account-button">
            <img src={defaultProfileImage} onClick={toggleAccountMenu} />
            {isAccountMenuOpen && (
              <AccountMenu
                profileURL={defaultProfileImage}
                toggleCallback={toggleAccountMenu}
              />
            )}
          </div>
        </AccountHeaderSignedIn>
      ) : (
        <AccountHeaderGuest>
          <div className="sign-in" onClick={handleGoToSignIn}>
            <SignInIcon />
            <p>Sign in</p>
          </div>
        </AccountHeaderGuest>
      )}
    </Container>
  );
}

const AccountHeaderGuest = styled.div`
  align-self: center;
  .sign-in {
    width: 110px;
    height: 40px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    margin: 1em;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;

    p{
      font-size: 14px;
      font-family: "Roboto", sans-serif;

    }
    
    svg{
      margin-right: 6px;
    }

    padding: 0px 15px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding-left: 10px;
`;

// const MenuHeader = styled.div`
//   display: flex;
//   gap: 1em;
//   align-items: center;
//   padding: 0em 1em;
//   .menuburger {
//     width: 24px;
//     height: 24px;
//   }
//   .menuburger:hover {
//     cursor: pointer;
//   }
//   .ytlogo {
//     height: 70%;
//     gap: 2px;
//     display: flex;
//     margin-left: 14px;
//     svg {
//       width: 90px;
//       height: 20px;
//       align-self: center;
//     }
//     sup {
//       font-size: 10px;
//     }
//   }
// `;
const SearchHeader = styled.div`
  display: flex;
  gap: 1em;
  width: 40%;
  height: 40px;
  align-self: center;
  .searchbar {
    flex-grow: 1;
    border: 1px solid #bcbcbc;
    display: flex;
    align-items: center;
    border-radius: 20px;
    padding-left: 1em;
    input {
      flex-grow: 1;
      border: none;
      outline: none;
    }
    .search-button {
      box-sizing: border-box;
      width: 64px;
      padding-right: 20px;
      background-color: #e0e0e0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      border-radius: 0px 20px 20px 0px;
    }
    .clear-button {
      margin-right: 10px;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .searchbar:hover {
    border: 1px solid green;
  }

  .speech-to-text {
    border-radius: 50%;
    border: none;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .speech-to-text-active {
    background-color: #00ff00;
  }
  button:hover {
    cursor: pointer;
  }
`;
const AccountHeaderSignedIn = styled.div`
  width: 190px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  .upload-button,
  .notification-button,
  .profile-account-button {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }
  }

  img {
    border-radius: 50%;
    width: 32px;
    aspect-ratio: 1;
  }

  .profile-account-button {
    position: relative;
  }
`;
