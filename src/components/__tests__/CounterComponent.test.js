/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";

import CounterComponent from "../CounterComponent.vue";

describe("test Counter Component", () => {
  test("should component have count prop", () => {
    const wrapper = shallowMount(CounterComponent, {
      propsData: {
        count: 6
      }
    });
    expect(wrapper.text()).toBe("6");
  });
});
