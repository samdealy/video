import React from 'react';
import Logo from './logo';


const srcStart= 'https://s3.amazonaws.com/fsp-video-pro/skill_logos/';
const className='skills-logo';

export const Rails = () => (
  <Logo src={srcStart + 'rails_logo.png'}
    className={className} alt='small-rails-logo' href='http://rubyonrails.org/' />
)

export const ReactLogo = () => (
  <Logo src={srcStart + 'react_logo.png'}
    className={className} alt='small-react-logo' href='https://reactjs.org/' />
)

export const Redux = () => (
  <Logo src={srcStart + 'redux_logo.png'}
    className={className} alt='large-redux-logo' href='https://redux.js.org/' />
)

export const Css = () => (
  <Logo src={srcStart + 'css_logo.png'}
    className={className} alt='medium-css-logo' href='https://developer.mozilla.org/en-US/docs/Web/CSS' />
)

export const Html = () => (
  <Logo src={srcStart + 'html_logo.png'}
    className={className} alt='html-logo' href='https://developer.mozilla.org/en-US/docs/Web/HTML' />
)

export const Postgres = () => (
  <Logo src={srcStart + 'postgres_logo.png'}
    className={className} alt='small-postgres-logo' href='https://www.postgresql.org/' />
)
