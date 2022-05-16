import { PropsWithChildren } from 'react';
import { PressableProps } from 'react-native';
import { useTheme } from 'styled-components';

import { TCssStyle } from '../../theme';

import {
  ButtonGradient,
  ButtonIconWrapper,
  ButtonText,
  ButtonWrapper,
  Loading,
} from './styles';

export interface IButtonProps extends PressableProps {
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
  hasGradient?: boolean;
  wrapperStyles?: TCssStyle;
  textStyles?: TCssStyle;
  icon?: any;
  type?: 'primary' | 'secondary' | 'outlined';
}

export const Button = ({
  text,
  isLoading = false,
  disabled = false,
  type = 'primary',
  wrapperStyles,
  textStyles,
  icon,
  children,
  ...buttonProps
}: PropsWithChildren<IButtonProps>) => {
  const { colors } = useTheme();

  const showButtonChildren = () => {
    return isLoading ? (
      <Loading
        color={type === 'primary' ? colors.pageBackground : colors.defaultFont}
      />
    ) : text ? (
      <>
        <ButtonIconWrapper>{icon}</ButtonIconWrapper>
        <ButtonText cssStyles={textStyles} disabled={disabled} type={type}>
          {text}
        </ButtonText>
      </>
    ) : (
      children
    );
  };

  return (
    <ButtonWrapper
      disabled={disabled}
      type={type}
      {...buttonProps}
      cssStyles={wrapperStyles}
    >
      <ButtonGradient
        colors={[colors.buttonLight, colors.buttonDark]}
        disabled={disabled}
      >
        {showButtonChildren()}
      </ButtonGradient>
    </ButtonWrapper>
  );
};
