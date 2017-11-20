import React from 'react';

export interface ZwjProps {
  age?: number;
  name?: string;
}

export default class Zwj extends React.Component<ZwjProps, any> {

  static defaultProps = {
    age: 22,
    name: 'zhang kaka',
  };

  constructor(props: ZwjProps) {
    super(props);
    this.state = {
      age: props.age,
      name: props.name,
    };
  }

  render() {
    const { age, name } = this.state;
    return (
      <p>name: {name},age:{age}</p>
    );
  }
}
