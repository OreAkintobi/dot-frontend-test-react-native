import { Alert } from 'react-native';

import {
  CenterView,
  Container,
  ModalButton,
  ModalText,
  ModalView,
} from './styles';

export const AwardModal = ({ modalVisible, onClose, text }: any) => (
  <Container
    animationType="slide"
    onRequestClose={() => {
      Alert.alert('Modal has been closed.');
      onClose();
    }}
    transparent={true}
    visible={modalVisible}
  >
    <CenterView>
      <ModalView>
        <ModalText>{text}</ModalText>
        <ModalButton onPress={() => onClose()} text="Done" />
      </ModalView>
    </CenterView>
  </Container>
);
