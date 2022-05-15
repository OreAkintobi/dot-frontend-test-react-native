import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const SafeAreaContainer = styled(SafeAreaView)(
  ({ theme: { colors } }) => css`
    flex: 1;
    background: ${colors.pageBackground};
  `,
);
