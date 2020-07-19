'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
  up () {
    this.create('coupon_users', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('coupon_users')
  }
}

module.exports = CouponUserSchema
