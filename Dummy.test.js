import {createApp} from 'vue';
import Dummy from './Dummy.vue';

it('should mount Dummy', function () {
    createApp(Dummy).mount(document.body);
    expect(document.body.textContent).toBe('Test 3');
});
