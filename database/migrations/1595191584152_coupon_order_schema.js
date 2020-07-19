'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponOrderSchema extends Schema {
  up () {
    this.create('coupon_orders', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('coupon_orders')
  }
}

module.exports = CouponOrderSchema
