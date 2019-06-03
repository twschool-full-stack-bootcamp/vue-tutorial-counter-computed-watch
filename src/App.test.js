/* eslint-disable no-undef */
import { shallowMount } from "@vue/test-utils";

import App from "./App.vue";

describe("test App Component", () => {
  test("should count increase when click '+' button", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 0 });
    const addButton = wrapper
      .findAll("button")
      .filter(element => element.text() === "+");
    addButton.trigger("click");
    expect(wrapper.vm.count).toBe(1);
    expect(wrapper.find("input").element.value).toBe("1");
  });

  test("should count decrease when click '-' button", () => {
    const wrapper = shallowMount(App);
    wrapper.setData({ count: 1 });
    const addButton = wrapper
      .findAll("button")
      .filter(element => element.text() === "-");
    addButton.trigger("click");
    expect(wrapper.vm.count).toBe(0);
    expect(wrapper.find("input").element.value).toBe("0");
  });

  test("should data count is change when input number", () => {
    const wrapper = shallowMount(App);
    const inputElement = wrapper.find("input");
    inputElement.element.value = 10;
    inputElement.trigger("input");
    expect(wrapper.vm.count).toBe("10");
  });
});
