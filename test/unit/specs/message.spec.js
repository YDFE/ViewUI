import {createVue, destroyVM, waitForIt} from '../util';

describe('Message.vue', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('should open a info message by default', done => {
    vm = createVue({render: () => {}});
    const testMessage = 'Hello world!';
    let messageContainer = null;
    vm.$Message.info({
      content: testMessage,
      duration: 200 // too long so we can test
    });

    const selector = '.ivu4-message-notice-content-text .ivu4-message-info';
    const checkMessageOpens = () => (messageContainer = document.querySelector(selector));

    waitForIt(checkMessageOpens, function() {
      expect(messageContainer.textContent.trim()).to.equal(testMessage);
      messageContainer.parentElement.removeChild(messageContainer);
      done();
    });
  });

  it('should open specific messages of different types', function(done) {
    vm = createVue({render: () => {}});
    const testMessage = type => `Hello world! this is a ${type} message`;
    const tests = ['info', 'success', 'warning', 'error', 'loading'].reduce((tests, type) => {
      return tests.concat({
        type: type,
        message: testMessage(type),
        class: 'ivu4-message-' + type
      });
    }, []);
    let domElements = [];

    for (const {type, message} of tests) {
      vm.$Message[type]({
        content: message,
        duration: 10 // long so we can test
      });
    }

    const checkAllMessageOpens = () => {
      domElements = document.querySelectorAll('.ivu4-message-custom-content');
      return domElements.length == tests.length && domElements;
    };

    waitForIt(checkAllMessageOpens, function() {
      const verify = {};
      domElements.forEach(el => {
        const message = el.textContent.trim();
        const test = tests.find(test => test.message == message);
        verify[test.type] = true;
        expect(el.classList.contains(test.class)).to.equal(true);
      });
      expect(Object.keys(verify).length).to.equal(tests.length);
      done();
    });
  });
});
