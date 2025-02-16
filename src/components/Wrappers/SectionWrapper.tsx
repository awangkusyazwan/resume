import { Box } from 'braid-design-system';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => (
  <Box
    marginBottom="medium"
    paddingY="small"
    overflow="auto"
    style={{ height: '550px' }}
  >
    {children}
  </Box>
);

export default SectionWrapper;
