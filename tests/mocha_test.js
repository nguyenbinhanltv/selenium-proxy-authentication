const assert = require('assert');
const chai = require("chai");

const compareTo = ({ email, password }) => {
  return email === "admin@gmail.com" && password === "admin" ? true : false;
}
describe('Username and password are correct and will pass http proxies.', function() {
  it('The proxy authentication should success !', function() {
    let data = { email: "admin@gmail.com", password: "admin" };
    chai.expect(compareTo(data)).to.be.true;
  });
});

describe('Username and password are wrong and wont pass http proxies.', function() {
  it('The proxy authentication should fail because wrong password !', function() {
    let data = { email: "admin@gmail.com", password: "" };
    chai.expect(compareTo(data)).to.be.false;
  });

  it('The proxy authentication should fail because wrong gmail !', function() {
    let data = { email: "", password: "admin" };
    chai.expect(compareTo(data)).to.be.false;
  });
});