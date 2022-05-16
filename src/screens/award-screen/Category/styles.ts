import { I_Nominee } from '@types';
import { FlatList, FlatListProps } from 'react-native';
import styled, { css } from 'styled-components/native';

export const CategoryContainer = styled.View(
  ({ theme: { scaleHP } }) => css`
    justify-content: center;
    align-items: center;
    margin-bottom: ${scaleHP(8)}px;
  `,
);

export const CategoryHeader = styled.View(
  ({ theme: { scaleHP } }) => css`
    height: ${scaleHP(40)}px;
    background-color: #bac8d3;
    justify-content: center;
    margin: ${scaleHP(8)}px ${scaleHP(4)}px ${scaleHP(2)}px;
  `,
);

export const CategoryText = styled.Text(
  ({ theme: { colors, fonts, scaleHP } }) => css`
    font-family: ${fonts.robotoBold};
    font-size: ${scaleHP(14)}px;
    color: ${colors.defaultFont};
    text-align: center;
  `,
);

export const NomineesList = styled(FlatList as new () => FlatList<I_Nominee>)<
  FlatListProps<I_Nominee>
>``;
