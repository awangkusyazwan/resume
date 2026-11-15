export const useResumeData = () => {
  const name = 'Awangku Muhammad Syazwan bin Awangku Sazali';
  const nickname = 'Syazwan';
  const credentials = ['BEng (Hons)', 'GradTech'];

  const email = 'me@awangkusyazwan.my';
  const website = 'awangkusyazwan.my';
  const phoneNumber = '+60178994995';

  const linkedInHref = 'https://www.linkedin.com/in/awangkusyazwa;n';
  const youTubeHref = 'https://www.youtube.com/@syaz-dev';
  const gitHubHref = 'https://github.com/awangkusyazwan';

  const emailHref = `mailto:${email}`;
  const websiteHref = `https://${website}`;
  const telNoHref = `tel:${phoneNumber}`;
  return {
    name,
    nickname,
    credentials,
    email,
    website,
    phoneNumber,
    linkedInHref,
    youTubeHref,
    gitHubHref,
    emailHref,
    websiteHref,
    telNoHref,
  };
};
