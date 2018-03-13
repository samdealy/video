import React from "react";

const className= "follow-button-inner-wrapper";

export const followHtml =
  ( <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M18 11h-5V6a1 1 0 1 0-2 0v5H6a1 1 0 0 0 0 2h5v5a1 1 0 0 0 2 0v-5h5a1 1 0 0 0 0-2z" fill="#1a2e3b"></path>
      </svg>
      <span>Follow</span>
    </div> );

export const followingHtml =
  ( <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path d="M10 18a1 1 0 0 1-.71-.29l-5-5L5.7 11.3l4.3 4.29 9.29-9.29 1.41 1.41-10 10a1 1 0 0 1-.7.29z" fill="#1a2e3b">
        </path>
      </svg>
      <span>Following</span>
    </div> );

export const unfollowHtml =
  ( <div className={className}>
      <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.06 10l4.597-4.596a.749.749 0 1 0-1.061-1.06L10 8.938 5.404 4.343a.749.749 0 1 0-1.06 1.061L8.938 10l-4.596 4.596a.749.749 0 1 0 1.061 1.06L10 11.062l4.596 4.596a.749.749 0 1 0 1.06-1.061L11.062 10z" fill="#1A2E3B" fillRule="evenodd">
        </path>
      </svg>
      <span>Unfollow</span>
    </div> );
