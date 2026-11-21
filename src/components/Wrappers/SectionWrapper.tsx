import { Box } from 'braid-design-system';

interface SectionWrapperProps {
  children: React.ReactNode;
}

const SectionWrapper = ({ children }: SectionWrapperProps) => (
  <Box marginBottom="medium" paddingY="small">
    {children}
  </Box>
);

export default SectionWrapper;
