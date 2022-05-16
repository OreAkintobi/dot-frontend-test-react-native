import { AwardModal } from '@components';
import { getCategories, submitVotes } from '@store';
import { I_AwardCategory, I_Nominee } from '@types';
import { useAppDispatch, useAppSelector } from '@utils';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Category } from './Category';
import { CategoryList, Container, VoteButton } from './styles';

export const AwardScreen = () => {
  const { colors } = useTheme();
  const dispatch = useAppDispatch();
  const { awards, isLoading } = useAppSelector(state => state.awards);
  const [votedNominees, setVotedNominees] = useState<{ [key: string]: string }>(
    {},
  );

  const [modalVisible, setModalVisible] = useState(false);

  const isDisabled = Object.keys(votedNominees).length < awards?.items.length;

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

  const handleSubmit = () => {
    setModalVisible(true);

    setTimeout(() => {
      dispatch(submitVotes(votedNominees));
    }, 1000);
  };

  if (isLoading) {
    return (
      <Container>
        <ActivityIndicator color={colors.defaultFont} size="large" />
      </Container>
    );
  }

  return (
    <>
      <Container>
        <CategoryList
          data={awards?.items}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </Container>

      {!isDisabled && (
        <VoteButton
          disabled={isDisabled}
          isLoading={isLoading}
          onPress={handleSubmit}
          text="Submit Votes"
        />
      )}

      <AwardModal
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        text={`Success! You have voted for ${Object.values(votedNominees).join(
          ', ',
        )}`}
      />
    </>
  );
};
