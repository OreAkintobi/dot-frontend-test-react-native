import { I_AwardCategory } from '@types';
import { FlatList, FlatListProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View(
  ({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.pageBackground};
    justify-content: center;
  `,
);

export const CategoryList = styled(
  FlatList as new () => FlatList<I_AwardCategory>,
)<FlatListProps<I_AwardCategory>>``;
