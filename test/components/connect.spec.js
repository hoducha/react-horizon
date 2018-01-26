import React, { Component } from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Provider, connect } from '../../src/index';
import { Horizon, TestComp } from '../utils';

describe('connect', () => {
  it('should pass horizon as a prop using higher order components', () => {
    const TestCompContainer = connect()(TestComp);
    const wrapper = mount((
      <Provider instance={Horizon()}>
        <TestCompContainer />
      </Provider>
    ));

    const stub = wrapper.find(TestComp).getElement(0);
    expect(stub.props).to.have.keys(['hz']);
  });

  it('should pass horizon as a prop using decorators', () => {
    @connect()
    class TestCompContainer extends Component {
      render() {
        return <TestComp {...this.props} />;
      }
    }

    const wrapper = mount((
      <Provider instance={Horizon()}>
        <TestCompContainer />
      </Provider>
    ));

    const stub = wrapper.find(TestComp).getElement(0);
    expect(stub.props).to.have.keys(['hz']);
  });
});
