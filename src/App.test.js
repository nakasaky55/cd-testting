//set up
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Counter from "./components/Counter";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { incrementCounter, counterReducer } from "./actions/incrementCounter";

const add = (a, b) => {
  return a + b;
};

it("render app", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<Counter />)).toEqual(true);
});

it("function will return sum of 2 arguments", () => {
  expect(add(1, 2)).toBe(3);
});

describe("<Counter />", () => {
  it("check if button is click", () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find("#increase-button");
    const value = parseInt(wrapper.find("p").text());
    button.simulate("click");
    expect(wrapper.find("p").text()).toEqual((value + 1).toString());
  });
});

describe("Counter redux pieces", () => {
  let store;

  beforeEach(() => {
    const mockStore = configureMockStore();
    store = mockStore({});
  });

  it("sends an increment counter action", () => {
    store.dispatch(incrementCounter());
    expect(store.getActions()).toEqual([{ type: "INCREMENT_COUNTR" }]);
  });

  it("applies the counter reducer for increment correctly", () => {
    // given
    const beforeState = { count: 0 };
    const action = { type: "INCREMENT_COUNTER" };
    // when
    const afterState = counterReducer(beforeState, action);
    // then
    expect(afterState).toEqual({ count: 1 });
  });
});
