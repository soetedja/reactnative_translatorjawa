import React from 'react';
import {View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import Color from '../constants/Colors';
import {AdMobBanner} from 'react-native-admob';
import PropTypes from 'prop-types';

class AdmobBanner extends React.Component {
  renderBanner() {
    if (this.props.banner) {
      return (
        <AdMobBanner
          adSize="smartBannerLandscape"
          adUnitID="/6499/example/banner"
          //adUnitID='ca-app-pub-2959849685026668/7257129035'
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={err => console.log(err)}
        />
      );
    }
  }
  render() {
    return <View style={styles.container}>{this.renderBanner()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {},
});

AdmobBanner.propTypes = {
  enabled: PropTypes.bool,
};

const mapStateToProps = state => ({
  banner: state.ads.banner,
});
export default connect(
  mapStateToProps,
  {},
)(AdmobBanner);
