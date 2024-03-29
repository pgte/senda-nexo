import React from 'react';

import {
  Grid, Row, Col
} from '@sketchpixy/rubix';

class ChatNav extends React.Component {
  render() {
    return (
      <ul className='sidebar-nav' {...this.props}>
        {this.props.children}
      </ul>
    );
  }
}

class ChatItem extends React.Component {
  render() {
    var isOffline = true;
    var status = 'border-darkgray';
    if(this.props.idle) status = 'border-yellow';
    if(this.props.busy) status = 'border-red';
    if(this.props.online) status = 'border-green';
    if(status !== 'border-darkgray') isOffline = false;

    let props = {
      ...this.props,
    };

    delete props.idle;
    delete props.busy;
    delete props.online;
    delete props.name;
    delete props.avatar;

    return (
      <li tabIndex='-1' {...props}>
        <a href='#' tabIndex='-1'>
          <img src={`/static/imgs/app/avatars/${this.props.avatar}.png`} width='30' height='30' className={status} style={{borderWidth: 2, borderStyle: 'solid', borderRadius: 100, padding: 2, position: 'relative', top: -7, opacity: isOffline ? 0.4 : 1}} />
          <span className='name' style={{position: 'relative', top: -2, opacity: isOffline ? 0.4 : 1}}>{this.props.name}</span>
        </a>
      </li>
    );
  }
}

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>ONLINE (4)</div>
              <div className='sidebar-nav-container'>
                <ChatNav style={{marginBottom: 0}}>
                  <ChatItem name='Jordyn Ouellet' avatar='avatar5' online />
                  <ChatItem name='Ava Parry' avatar='avatar9' online />
                  <ChatItem name='Angelina Mills' avatar='avatar10' online />
                  <ChatItem name='Crystal Ford' avatar='avatar11' online />
                </ChatNav>
              </div>
              <div className='sidebar-header'>IDLE (3)</div>
              <div className='sidebar-nav-container'>
                <ChatNav style={{marginBottom: 0}}>
                  <ChatItem name='Toby King' avatar='avatar7' idle />
                  <ChatItem name='Ju Lan' avatar='avatar13' idle />
                  <ChatItem name='Lana Collin' avatar='avatar14' idle />
                </ChatNav>
              </div>
              <div className='sidebar-header'>BUSY (4)</div>
              <div className='sidebar-nav-container'>
                <ChatNav style={{marginBottom: 0}}>
                  <ChatItem name='Alexandra Mordin' avatar='avatar20' busy />
                  <ChatItem name='Jonas Schäfer' avatar='avatar17' busy />
                  <ChatItem name='Ricardo Ibarra' avatar='avatar15' busy />
                  <ChatItem name='The Unknown' avatar='avatar16' busy />
                </ChatNav>
              </div>
              <div className='sidebar-header'>OFFLINE (3)</div>
              <div className='sidebar-nav-container'>
                <ChatNav style={{marginBottom: 0}}>
                  <ChatItem name='Evan Poulain' avatar='avatar19' />
                  <ChatItem name='Canan Erdem' avatar='avatar18' />
                  <ChatItem name='Antelope Inc.' avatar='avatar8' />
                </ChatNav>
                <br/>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
