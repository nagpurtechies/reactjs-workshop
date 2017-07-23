/* global describe, it, browser */

const expect = require('chai').expect;

describe('TodoList App', () => {
  it('Should load with the right title', () => {
    browser.url('http://localhost:3000/');
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('TodoList App');
  });

  it('Should allow me to create a Todo', () => {
    const todoText = 'First task for the day';
    browser.url('http://localhost:3000/');
    browser.element('#todoinput').setValue(todoText);
    browser.click('#todosubmit');
    const actual = browser.element('.todo-text').getText();

    expect(actual).to.equal(todoText);
  });
});
