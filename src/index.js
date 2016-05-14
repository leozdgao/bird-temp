const a = () => {}
const b = [1, 2]

a(b)

function decorator(klass) {
  return klass
}

@decorator
class Animal {
  constructor() {

  }
}

const c = new Animal()
c.test()
