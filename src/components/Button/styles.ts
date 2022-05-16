import { TCssStyle } from '@theme';
import { LinearGradient } from 'expo-linear-gradient';
import styled, { css } from 'styled-components/native';

// Extensible styling
type TButtonCssStyles = { cssStyles?: TCssStyle };

interface IButtonTextProps extends TButtonCssStyles {
  type?: 'primary' | 'secondary' | 'outlined';
  disabled?: boolean;
}

export const ButtonWrapper = styled.Pressable<IButtonTextProps>(
  ({ theme: { colors, scaleHP, scaleWP }, cssStyles, disabled }) => css`
    height: ${scaleHP(54)}px;
    width: ${scaleWP(315)}px;
    border-radius: ${scaleHP(8)}px;
    background-color: ${colors.buttonLight};
    opacity: ${disabled ? 0.5 : 1};
    ${cssStyles}
  `,
);

// @ts-ignore
export const ButtonGradient = styled(LinearGradient)<IButtonTextProps>(
  ({ theme: { scaleHP }, cssStyles, disabled }) => css`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 1;
    opacity: ${disabled ? 0.5 : 1};
    border-radius: ${scaleHP(8)}px;
    ${cssStyles}
  `,
);

export const ButtonText = styled.Text<IButtonTextProps>(
  ({ theme: { colors, fonts, scaleHP }, cssStyles }) => css`
    font-family: ${fonts.robotoBold};
    font-size: ${scaleHP(14)}px;
    color: ${colors.defaultFont};
    ${cssStyles};
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

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
})<IButtonTextProps>``;
