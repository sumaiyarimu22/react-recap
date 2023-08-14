import React from "react";

export default class Emoji extends React.Component {
  addEmoji = (text: any, emoji: any) => `${emoji} ${text} ${emoji}`;

  render() {
    return this.props.children({ addEmoji: this.addEmoji });
  }
}
