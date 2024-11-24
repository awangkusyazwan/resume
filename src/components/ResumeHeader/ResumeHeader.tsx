import { Card, Column, Columns, Hidden, Stack } from 'braid-design-system';

import { NameAndCredentials } from './NameAndCredentials';
import PointsOfContact from './PointsOfContact';
import ProfessionalPortfolio from './ProfessionalPortfolio';

export const ResumeHeader = () => (
  <Card>
    <Stack space="small">
      <NameAndCredentials />
      <Hidden above="mobile">
        <PointsOfContact />
        <ProfessionalPortfolio />
      </Hidden>
      <Hidden below="tablet">
        <Columns align="center" space="none">
          <Column width="2/5">
            <PointsOfContact />
          </Column>
          <Column>
            <ProfessionalPortfolio />
          </Column>
        </Columns>
      </Hidden>
    </Stack>
  </Card>
);
