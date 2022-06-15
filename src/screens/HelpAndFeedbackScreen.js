import React from 'react';
import {Linking, ScrollView, StyleSheet} from 'react-native';
import {Card, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

class HelpAndFeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'Bantuan & Umpan balik',
    headerMode: 'none',
    header: undefined,
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.content}>
        <Card.Title
          title="Translator Jawa"
          subtitle="Mongosilakan"
          left={props => (
            <Icon {...props} name="book" size={30} color="#5B5B5A" />
          )}
        />
        <Card.Content>
          <Paragraph>
            Layanan terjemahan online Bahas Indonesia ke Bahasa Jawa dan
            sebaliknya dengan unggah-ungguh Bahasa Jawa. Bahasa yang didukung:
            Indonesia, Ngoko, Krama, Krama Inggil. Aplikasi ini masih belum
            sempurna dan dalam tahap pengembangan, mohon maaf apabila masih ada
            terjemahan yang kurang tepat.
          </Paragraph>
        </Card.Content>
        <Card.Title
          title="Versi"
          subtitle="2.0.0"
          left={props => (
            <Icon {...props} name="fire" size={30} color="#DB494A" />
          )}
        />
        <Card.Title
          title="Kontak"
          subtitle="soetedja@gmail.com"
          left={props => (
            <Icon {...props} name="envelope" size={30} color="#5B5B5A" />
          )}
        />
        <Card
          style={styles.card}
          onPress={() => {
            Linking.openURL('market://details?id=net.mongosilakan.mobile');
          }}>
          <Card.Title
            title="Beri nilai & ulasan"
            subtitle="Buka Play Store"
            left={props => (
              <Icon {...props} name="google-play" size={30} color="#2EA3B9" />
            )}
          />
        </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 4,
  },
  card: {
    margin: 4,
    borderColor: 'transparent',
  },
});

export default HelpAndFeedbackScreen;
