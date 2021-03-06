import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import PropTypes from 'prop-types';
import {ScrollView, Text, View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { DrawerActions } from 'react-navigation';
import { Header, Icon } from 'react-native-elements';

class DrawerScreen extends Component {

  navigateToScreen = (route) => () => {

    if (route === 'loginSignupSelection') {
      global.isLoggedIn = false;
      global.currentLoggedInUser = 'FOOFOO';
    }

    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  renderHeader = () => {
    return(
        <Header
          backgroundColor="transparent"
          outerContainerStyles={{borderBottomWidth: 0.5, borderColor: '#000000'}}
          centerComponent={{ text: 'M i D E C' , style: { color: '#fff',fontSize: 18, fontWeight: 'bold' }  }}
          //leftComponent={{ icon: 'chevron-left', style: { size: 8 }, type: 'font-awesome', color: '#fff', onPress: () => this.props.navigation.dispatch(DrawerActions.toggleDrawer()) }}
        />
      );
    }

  render2Icon = () => {
    if (global.isLoggedIn === true) {
      if (JSON.parse(global.isCurrentLoggedInUser).userType === 'advisee') {
        return(
          <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="bookmark" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
            <View style={{flex: 9}}>
              <Text onPress={this.navigateToScreen('bookmarks')} style={{marginLeft: 10, color:'#FFF'}}>Bookmarks</Text>
            </View> 
          </View>
        );
      } else {
        return(
          <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="money" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
            <View style={{flex: 9}}>
              <Text onPress={this.navigateToScreen('feeAndBankDetails')} style={{marginLeft: 10, color:'#FFF'}}>Payment & Fees</Text>
            </View> 
          </View>
        );
      }
    } else {
      return(
        <View style={styles.menuItem}>
          <View style={{flex: 1}}>
            <Icon name="bookmark" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
          </View>
          <View style={{flex: 9}}>
            <Text onPress={this.navigateToScreen('bookmarks')} style={{marginLeft: 10, color:'#FFF'}}>Bookmarks</Text>
          </View> 
        </View>
      );
    }
  }

  render1Icon = () => {
    if (global.isLoggedIn === true) {
      if (JSON.parse(global.isCurrentLoggedInUser).userType === 'advisee') {
        return(
          <View style={styles.menuItem}>
              <View style={{flex: 1}}>
                <Icon name="home" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
              </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('home')} style={{marginLeft: 10, color:'#FFF'}}>Adviser Selection</Text>
              </View>
            </View>
        );
      } else {
        return(
          <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="calendar-times-o" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
            <View style={{flex: 9}}>
              <Text onPress={this.navigateToScreen('timeSlots')} style={{marginLeft: 10, color:'#FFF'}}>Time Slots</Text>
            </View> 
          </View>
        );
      }
    } else {
      return(
        <View style={styles.menuItem}>
              <View style={{flex: 1}}>
                <Icon name="home" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
              </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('home')} style={{marginLeft: 10, color:'#FFF'}}>Adviser Selection</Text>
              </View>
            </View>
      );
    }
  }

  render () {
    return (
      <View>
        <ImageBackground source={require('../../assets/bg-menu.png')} style={{width: '100%', height: '100%'}}>
        { this.renderHeader() }
        <ScrollView>
          <View>
            
            <View style={styles.menuItem}>
              <View style={{flex: 1}}>
                <Icon name="user" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
              </View> 
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('adviseeProfile')} style={{marginLeft: 10, color:'#FFF'}}>My Profile</Text>
              </View>
              </View>

            <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="group" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/> 
            </View>
            <View style={{flex: 9}}>
              <Text onPress={this.navigateToScreen('myAppointments')} style={{marginLeft: 10, color:'#FFF'}}>My Appointments</Text>
            </View>
            </View>

            {this.render1Icon()}

            {this.render2Icon()}

            <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="bell" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
            <View style={{flex: 9}}>
              <Text onPress={this.navigateToScreen('notifications')} style={{marginLeft: 10, color:'#FFF'}}>Notifications</Text>
            </View>
            </View>
           
            <View style={styles.menuItem}>
              <View style={{flex: 1}}>
                <Icon name="info-circle" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
              </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('about_us')} style={{marginLeft: 10, color:'#FFF'}}>About Us</Text>
              </View>
            </View>

            <View style={styles.menuItem}>
              <View style={{flex: 1}}>
                <Icon name="gear" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
              </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('settings')} style={{marginLeft: 10, color:'#FFF'}}>Settings</Text>
              </View>
            </View>

            <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="feedback" type="material" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('feedback')} style={{marginLeft: 10, color:'#FFF'}}>Feedback</Text>
              </View>
            </View>

            <View style={styles.menuItem}>
            <View style={{flex: 1}}>
              <Icon name="sign-out" type="font-awesome" size={16} color='#FFF' style={{marginRight: 10}}/>
            </View>
              <View style={{flex: 9}}>
                <Text onPress={this.navigateToScreen('loginSignupSelection')} style={{marginLeft: 10, color:'#FFF'}}>Sign Out</Text>
              </View>
            </View>
            
          </View>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
    menuItem:{
        padding: 10,
        marginLeft: 10,
        marginTop: 10,
        //borderWidth: 0.5,
        borderColor: '#d6d7da',
        flexDirection: 'row',
    }

}  

DrawerScreen.propTypes = {
  navigation: PropTypes.object
};

export default DrawerScreen;
