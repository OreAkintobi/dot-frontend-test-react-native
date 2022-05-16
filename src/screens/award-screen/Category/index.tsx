import { I_AwardCategory, I_Nominee } from '@types';
import { numberOfColumns } from '@utils';
import { PropsWithChildren } from 'react';

import { Nominee } from '../Nominee';

import {
  CategoryContainer,
  CategoryHeader,
  CategoryText,
  NomineesList,
} from './styles';

export interface ICategoryProps {
  category: I_AwardCategory;
  selectedNominee: string;
  onVote: (nominee: I_Nominee) => void;
}

export const Category = ({
  category,
  selectedNominee,
  onVote,
}: PropsWithChildren<ICategoryProps>) => {
  const renderItem = ({ item, index }: { item: I_Nominee; index: number }) => (
    <Nominee
      key={index}
      isSelectedNominee={item?.title === selectedNominee}
      nominee={item}
      onSelectNominee={() => onVote(item)}
    />
  );

  const ListHeaderComponent = (
    <CategoryHeader>
      <CategoryText>{category?.title} Nominees</CategoryText>
    </CategoryHeader>
  );

  const keyExtractor = (_item: any, index: number) => String(index);

  return (
    <CategoryContainer>
      <NomineesList
        data={category?.items}
        keyExtractor={keyExtractor}
        ListHeaderComponent={ListHeaderComponent}
        numColumns={numberOfColumns}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </CategoryContainer>
  );
};
