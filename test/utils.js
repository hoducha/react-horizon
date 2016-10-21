import React from 'react';
import { Provider } from '../src/index';

export const TestComp = () => <div />;

export function Horizon({ connect, status } = {}) {
  const hz = Horizon;
  hz.watch = () => ({ subscribe: (handler) => handler(['subscription']) });
  hz.connect = connect || (() => undefined);
  hz.status = status || (() => undefined);
  return hz;
}
