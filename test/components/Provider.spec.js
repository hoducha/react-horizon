import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider } from '../../src/index';
import { Horizon } from '../utils';

describe('Provider', () => {

  it('should have `instance` prop with a value of an instance of `Horizon`', () => {
    const wrapper = mount((
      <Provider instance={Horizon()}>
        <div />
      </Provider>
    ));

    expect(wrapper.prop('instance'))
      .to.have.keys(['watch', 'connect', 'status']);
  });

  it('should call `connect` method of the `instance` prop', () => {
    const connect = sinon.spy();
    const wrapper = mount((
      <Provider instance={Horizon({ connect })}>
        <div />
      </Provider>
    ));

    expect(connect.calledOnce).to.equal(true);
  });
});
