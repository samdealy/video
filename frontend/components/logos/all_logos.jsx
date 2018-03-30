import React from 'react';
import Logo from './logo';

const srcStart  = "assets/images/site_logos/";
const className = "contact-logo";

const emailHref = "mailto:sam.dealy@gmail.com";
const adobeHref = "assets/documents/Samson_Dealy_CV.pdf";
const angelListHref = "https://angel.co/samson-dealy";
const gitHubHref = 'https://github.com/samdealy';
const LinkedinHref = 'https://linkedin.com/in/samson-dealy';

export const EmailLogo = () => (
  <Logo src={srcStart + 'email_logo.png'} className={className}
    href={emailHref} alt='email-logo' />
)

export const AdobeLogo = () => (
  <Logo src={srcStart + 'adobe_logo.png'} className={className}
    href={emailHref} alt='adobe-logo' />
)

export const AngelListLogo = () => (
  <Logo src={srcStart + 'angel_list_logo.png'} className={className}
    href={angelListHref} alt='angel-list-logo' />
)

export const GitHubLogo = () => (
  <Logo src={srcStart + 'github_logo.png'} className={className}
    href={gitHubHref} alt='git-hub-logo' />
)

export const LinkedInLogo = () => (
  <Logo src={srcStart + 'linkedin_logo.png'} className={className}
    href={LinkedinHref} alt='linkedin-logo' />
)
