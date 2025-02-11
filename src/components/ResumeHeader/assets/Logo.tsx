import { Box } from 'braid-design-system';

interface LogoProps {
  href: string;
  logo: JSX.Element;
}

export const Logo = ({ href, logo }: LogoProps) => (
  <Box href={href} component="a">
    {logo}
  </Box>
);
