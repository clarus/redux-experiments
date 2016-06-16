// @flow
import React, { Element } from 'react';

type Props = {
  value: string
};

export default function Todo(props: Props): Element {
  return (
    <li>
      {props.value}
    </li>
  );
}
