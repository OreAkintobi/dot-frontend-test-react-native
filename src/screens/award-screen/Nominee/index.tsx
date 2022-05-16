import { I_Nominee } from '@types';
import { tileSize } from '@utils';

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
}: I_NomineeProps) => (
  <NomineeListItem isSelected={isSelectedNominee} style={{ width: tileSize }}>
    <NomineeText numberOfLines={2}>{nominee?.title}</NomineeText>

    <NomineeImage resizeMode="contain" source={{ uri: nominee?.photoUrL }} />

    <NomineeVoteButton
      disabled={isSelectedNominee}
      onPress={onSelectNominee}
      text="Vote"
    />
  </NomineeListItem>
);
