import { RuleObject } from 'rc-field-form/lib/interface';

const email = (rule: RuleObject, value: string) => {
  if(!value) {
    return Promise.reject('Email cannot be empty')
  }
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if(!re.test(value)) {
    return Promise.reject('Email format is invalid')
  }
  return Promise.resolve()
}

const password = (rule: RuleObject, value: string) => {
  if(!value) {
    return Promise.reject('Password cannot be empty')
  }
  return Promise.resolve()
}

const validator = {
  email,
  password
}

export default validator