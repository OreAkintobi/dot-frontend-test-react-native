import { Button } from '@components';
import { I_AwardCategory } from '@types';
import { FlatList, FlatListProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View(
  ({ theme: { colors, scaleHP } }) => css`
    flex: 1;
    background-color: ${colors.pageBackground};
    justify-content: center;
    padding-bottom: ${scaleHP(60)}px;
  `,
);

export const VoteButton = styled(Button)(
  ({ theme: { colors } }) => css`
    position: absolute;
    background-color: ${colors.pageBackground};
    justify-content: center;
    align-self: center;
    bottom: 5%;
    width: 70%;
    height: 5%;
    background-color: ${colors.buttonDark};
  `,
);

export const CategoryList = styled(
  FlatList as new () => FlatList<I_AwardCategory>,
)<FlatListProps<I_AwardCategory>>``;
