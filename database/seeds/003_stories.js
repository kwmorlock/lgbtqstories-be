
exports.seed = function(knex) {
  return knex('stories').insert([
    {title: 'First Kiss', story: 'Had my first kiss at Stone Wall last week!', tags: 'lesbian', usersId: 1}, //1
    {title: 'New Binder', story: 'Finally got a binder that fits right', tags: 'nonbinary', usersId: 2}, //1
    {title: 'Therapy is tough', story: 'It can be pretty tough to find a therapist that understands nonbinary issues', tags: 'nonbinary', usersId: 2}, //2
    {title: 'New job', story: 'Got a new job that accepts me for me!', tags: 'gay, trans', usersId: 3}, //3
    {title: 'Great boyfriend', story: 'My boyfriend surprises me with the best gifts!', tags: 'gay, trans', usersId: 3}, //3
    {title: 'HRT Changes', story: 'Super excited about the magical changes HRT is having for me', tags: 'trans', usersId: 4}, //4
    {title: 'Amazing date!!!', story: 'Had an amazing date with a cute girl last week', tags: 'trans, bi', usersId: 4}, //4
  ]);
};