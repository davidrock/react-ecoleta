import Knex from 'knex';

export async function up(knex: Knex){
    //CREATE TABLE
    return knex.schema.createTable('points', x=> {
        x.increments('id').primary();
        x.string('name').notNullable();
        x.string('email').notNullable();
        x.string('image').notNullable();
        x.string('whatsapp').notNullable();
        x.decimal('latitude').notNullable();
        x.decimal('longitude').notNullable();
        x.string('city').notNullable();
        x.string('uf', 2).notNullable();
    })
}

export async function down(knex:Knex){
    return knex.schema.dropTable('point');
}