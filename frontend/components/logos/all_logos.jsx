import React from 'react';
import Logo from './logo';

const srcStart  = "https://s3.amazonaws.com/fsp-video-pro/site_logos/";
const resumeSrc = "https://s3.amazonaws.com/fsp-video-pro/Samson_Dealy_CV.pdf"
const className = "contact-logo";

const personalSiteHref = "http://samdealy.io";
const emailHref = "mailto:sam.dealy@gmail.com";
const adobeHref = "assets/documents/Samson_Dealy_CV.pdf";
const angelListHref = "https://angel.co/samson-dealy";
const gitHubHref = 'https://github.com/samdealy';
const LinkedinHref = 'https://linkedin.com/in/samson-dealy';


export const SD = () => (
  <Logo src={srcStart + 'sd.png'} className={className}
    href={personalSiteHref} alt='sd-logo' />
)

export const Email = () => (
  <Logo src={srcStart + 'email_logo.png'} className={className}
    href={emailHref} alt='email-logo' />
)

export const CV = () => (
  <Logo src={srcStart + 'adobe_logo.png'} className={className}
    href={resumeSrc} alt='adobe-logo' />
)

export const AngelList = () => (
  <Logo src={srcStart + 'angel_list_logo.png'} className={className}
    href={angelListHref} alt='angel-list-logo' />
)

export const GitHub = () => (
  <Logo src={srcStart + 'github_logo.png'} className={className}
    href={gitHubHref} alt='git-hub-logo' />
)

export const LinkedIn = () => (
  <Logo src={srcStart + 'linkedin_logo.png'} className={className}
    href={LinkedinHref} alt='linkedin-logo' />
)
