import React, {Component} from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
//import Main from './Main'; // Our custom react component
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';

import { Router } from 'react-router';
import { HashRouter,Route, hashHistory } from 'react-router-dom';

import Screen from './components/Screen';
import Login from './components/Login/Login';
import RegistrationStep1 from './components/Registration/RegistrationStep1';
import RegistrationStep2 from './components/Registration/RegistrationStep2';
import RegistrationStep3 from './components/Registration/RegistrationStep3';
import Chats from './components/Chats/Chats';
import ChatMessages from './components/Chats/ChatMessages';
import Settings from './components/Settings/Settings';
import WhomSend from './components/WhomSend/WhomSend';
import WhomSendMessages from './components/WhomSend/WhomSendMessages';
import Messages from './components/Messages/Messages';
import ReceiveMessage from './components/ReceiveMessage/ReceiveMessage';
import ReceiveMessageNoMessage from  './components/ReceiveMessage/ReceiveMessageNoMessage';
import UserAgreement from './components/Registration/UserAgreement';
import SelectGender from './components/Settings/SelectGender';
import PrivacyPolicy from './components/Settings/PrivacyPolicy';
import About from './components/Settings/About';

import "../www/style.less";
import "../www/media.less";

export default class Index extends React.Component {

    constructor() {

        super();

    }

    render(){
        return (
            <div>
                <MuiThemeProvider>
                    <HashRouter history={hashHistory}>
                        <div>
                            <Route exact path="/" component={Screen}></Route>
                            <Route exact path="/login" component={Login}></Route>
                            <Route exact path="/registration/enter-phone" component={RegistrationStep1}></Route>
                            <Route exact path="/registration/enter-code" component={RegistrationStep2}></Route>
                            <Route exact path="/registration/enter-user-data" component={RegistrationStep3}></Route>
                            <Route exact path="/registration/user-agreement" component={UserAgreement}></Route>
                            <Route exact path="/chats" component={Chats}></Route>
                            <Route exact path="/chats/messages" component={ChatMessages}></Route>
                            <Route exact path="/settings" component={Settings}></Route>
                            <Route exact path="/settings/gender" component={SelectGender}></Route>
                            <Route exact path="/settings/privacy-policy" component={PrivacyPolicy}></Route>
                            <Route exact path="/settings/about" component={About}></Route>
                            <Route exact path="/whom-send" component={WhomSend}></Route>
                            <Route exact path="/whom-send/messages" component={WhomSendMessages}></Route>
                            <Route exact path="/receive-message-no-message" component={ReceiveMessageNoMessage}></Route>
                            <Route exact path="/receive-message" component={ReceiveMessage}></Route>
                        </div>
                    </HashRouter>
                </MuiThemeProvider>
            </div>
        )
    }
}
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//render(<Main />, document.getElementById('app'));
render(<Index/>,document.getElementById('app'));