import { getCategories } from '@store';
import { I_AwardCategory, I_Nominee } from '@types';
import { useAppDispatch, useAppSelector } from '@utils';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Category } from './Category';
import { CategoryList, Container } from './styles';

export const AwardScreen = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { awards, isLoading } = useAppSelector(state => state.awards);
  const [votedNominees, setVotedNominees] = useState<{ [key: string]: string }>(
    {},
  );

  const onVote = (category: I_AwardCategory, nominee: I_Nominee) => {
    setVotedNominees({
      ...votedNominees,
      [category.id]: nominee?.title,
    });
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const renderItem = ({
    item,
    index,
  }: {
    item: I_AwardCategory;
    index: number;
  }) => (
    <Category
      key={index}
      category={item}
      onVote={nominee => onVote(item, nominee)}
      selectedNominee={votedNominees[item.id]}
    />
  );

  const keyExtractor = (_item: any, index: number) => String(index);

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator color={colors.defaultFont} size="large" />
      </Container>
    );
  }

  return (
    <Container>
      <CategoryList
        data={awards?.items}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
