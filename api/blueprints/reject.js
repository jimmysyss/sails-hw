/**
 * Created by jimmy on 4/28/17.
 */

module.exports = function reject(req, res) {
  res.ok({
    name: "HELLO WORLD",
    message: "REJECT IS GOOD"
  })
}
