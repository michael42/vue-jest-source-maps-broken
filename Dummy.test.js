const {createApp} = require('vue')
const Dummy = require('./Dummy.vue')

it('should mount Dummy', function () {
    createApp(Dummy).mount(document.body);
    expect(document.body.textContent).toBe('Test 3')
});
