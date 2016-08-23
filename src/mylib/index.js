
let MyLibCore = {
  version: '0.9.9',
  get versions () {
    return 'v' + this.version
  },
  myFunc () {
    console.log('processing something...')
  }
}

exports.MyLib = MyLibCore
