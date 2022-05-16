import { Button } from '@components/Button';
import styled, { css } from 'styled-components/native';

export const Container = styled.Modal(() => css``);

export const CenterView = styled.View(
  ({ theme: { scaleHP } }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: ${scaleHP(22)}px;
  `,
);

export const ModalView = styled.View(
  ({ theme: { colors, scaleVerticalHorizontal, scaleHP } }) => css`
    background-color: white;
    border-radius: ${scaleHP(8)}px;
    padding: ${scaleVerticalHorizontal([10, 20])};
    align-items: center;
    justify-content: center;
    shadow-color: ${colors.defaultFont};
    shadow-opacity: 0.25;
    shadow-radius: ${scaleHP(4)}px;
    elevation: 5;
    width: 80%;
  `,
);

export const ModalText = styled.Text(
  ({ theme: { colors, scaleHP } }) => css`
    margin-bottom: ${scaleHP(15)}px;
    color: ${colors.defaultFont};
    text-align: center;
  `,
);

export const ModalButton = styled(Button)(
  ({ theme: { colors, scaleHP } }) => css`
    border-radius: ${scaleHP(20)}px;
    elevation: ${scaleHP(2)};
    width: 60%;
    height: 20%;
    background-color: ${colors.green};
  `,
);

export const ButtonIconWrapper = styled.View(
  ({ theme: { fonts, scaleHP, scaleWP } }) => css`
    font-family: ${fonts.roboto};
    font-size: ${scaleHP(16)}px;
    width: ${scaleWP(24)}px;
    height: ${scaleHP(24)}px;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${scaleHP(14)}px;
  `,
);
