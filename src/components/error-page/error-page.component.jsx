import React, { Component } from 'react';

import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from './error-page.styles';

export default class ErrorPage extends Component {
  state = {
    hasErrored: false,
  };

  static getDerivedStateFromError(error) {
    // Do something with error

    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.error(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'} />
          <ErrorImageText>This Page is Lost in Space</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}
