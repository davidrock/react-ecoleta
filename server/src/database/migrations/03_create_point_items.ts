import Knex from 'knex';

export async function up(knex: Knex){
    //CREATE TABLE
    return knex.schema.createTable('point_items', x=> {
        x.increments('id');
        x.integer('point_id').notNullable().references('id').inTable('points');
        x.integer('item_id').notNullable().references('id').inTable('items');
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('point_items');
}