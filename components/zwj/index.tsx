import React from 'react';

export interface ZwjProps {
  age?: string;
  name?: string;
}

export interface ZwjState {
}

export default class Zwj extends React.Component<ZwjProps, ZwjState> {

  constructor(props: ZwjProps) {
    super(props);

    this.state = {
      age: 22,
      name: "zwj",
    };
  }


  render() {
    const { ...otherProps } = this.props;
    const name = this.state.name;
    const age = this.state.age;
    return (
      <div>
        name: {name},--age:{age}
      </div>
    );
  }
}
