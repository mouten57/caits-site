import React from 'react'
const mailchimp = function mailChimp() {
  window.dojoRequire(['mojo/signup-forms/Loader'], function(L) {
    L.start({
      baseUrl: 'mc.us20.list-manage.com',
      uuid: 'b64b0ed614b2044e686a801dc',
      lid: 'b430f08be6',
      uniqueMethods: true,
    })
  })
}
export default mailchimp()
