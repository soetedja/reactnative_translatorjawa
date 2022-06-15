import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            style={styles.pp}
            source={{
              uri: props.auth.user.picture,
            }}
            size={50}
          />
          <Title style={styles.title}>{props.auth.user.name}</Title>
          <Caption style={styles.caption}>{props.auth.user.username}</Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              {/* <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption> */}
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
           <DrawerItem
            icon={({color, size}) => (
              <Icon {...props} name="home" size={15} color="#5B5B5A" />
            )}
            label="Beranda"
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            icon={({color, size}) => (
              <Icon {...props} name="sign-out-alt" size={15} color="#5B5B5A" />
            )}
            label="Logout"
            onPress={() => {}}
          />
          {/* <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons name="tune" color={color} size={size} />
            // )}
            label="Preferences"
            onPress={() => {}}
          />
          <DrawerItem
            // icon={({color, size}) => (
            //   <MaterialCommunityIcons
            //     name="bookmark-outline"
            //     color={color}
            //     size={size}
            //   />
            // )}
            label="Bookmarks"
            onPress={() => {}}
          /> */}
        </Drawer.Section>
        {/* <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section> */}
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    marginTop: 20,
  },
  pp: {},
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  null,
)(CustomDrawer);
