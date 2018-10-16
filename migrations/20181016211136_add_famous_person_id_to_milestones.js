
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.table('milestones', function(table){
      table.integer('id').references('id').inTable('famous_people');
    })
  ])
};

exports.down = function(knex, Promise) {
   return Promise.all([
    knex.schema.table('milestones', function(table){
      table.dropColumn('id');
    })
  ])
};
