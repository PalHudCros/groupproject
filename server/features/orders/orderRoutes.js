import orderCtrl from './orderCtrl'

export default function(app) {
  app.route('/api/order')
    .post(orderCtrl)
}
