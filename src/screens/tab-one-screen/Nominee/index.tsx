import { I_Nominee } from '@types';
import { Dimensions } from 'react-native';

import {
  NomineeImage,
  NomineeListItem,
  NomineeText,
  NomineeVoteButton,
} from './styles';

export interface I_NomineeProps {
  nominee: I_Nominee;
  onSelectNominee: () => void;
  isSelectedNominee: boolean;
}

export const Nominee = ({
  nominee,
  onSelectNominee,
  isSelectedNominee,
}: I_NomineeProps) => {
  const { width } = Dimensions.get('window');
  const isTablet = width > 480;
  const numberOfColumns = !isTablet ? 2 : 3;
  const tileSize = width / numberOfColumns - 16;

  return (
    <NomineeListItem isSelected={isSelectedNominee} style={{ width: tileSize }}>
      <NomineeText numberOfLines={2}>{nominee?.title}</NomineeText>

      <NomineeImage resizeMode="contain" source={{ uri: nominee?.photoUrL }} />

      <NomineeVoteButton onPress={onSelectNominee} text="Vote" />
    </NomineeListItem>
  );
};
