import { Button } from '@components/Button';
import styled, { css } from 'styled-components/native';

export const NomineeText = styled.Text(
  ({ theme: { colors, fonts, scaleHP } }) => css`
    font-family: ${fonts.robotoBold};
    font-size: ${scaleHP(14)}px;
    color: ${colors.defaultFont};
    text-align: center;
    flex: 1;
  `,
);

export const NomineeListItem = styled.View<{ isSelected?: boolean }>(
  ({ theme: { colors, scaleHP }, isSelected = false }) => css`
    background-color: ${isSelected
      ? colors.selectedNomineeCard
      : colors.nomineeCard};
    margin: ${scaleHP(4)}px;
    padding: ${scaleHP(8)}px;
    aspect-ratio: 0.9;
    justify-content: space-between;
    align-items: center;
  `,
);

export const NomineeImage = styled.Image(
  ({ theme: { scaleHP } }) => css`
    justify-content: center;
    align-items: center;
    width: ${scaleHP(100)}px;
    flex: 1;
    height: ${scaleHP(100)}px;
    margin-bottom: ${scaleHP(6)}px;
    flex: 3;
  `,
);

export const NomineeVoteButton = styled(Button)(
  ({ theme: { colors, scaleHP } }) => css`
    background-color: ${colors.buttonLight};
    width: ${scaleHP(60)}px;
    height: ${scaleHP(20)}px;
  `,
);
