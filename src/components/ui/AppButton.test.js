const { shallowMount } = require('@vue/test-utils');
import AppButton from './AppButton.vue';

describe('AppButton', () => {
  test('Has correct text', () => {
    const text = 'new message';
    const wrapper = shallowMount(AppButton, {
      propsData: { text },
    });
    expect(wrapper.text()).toMatch(text);
  });
});
