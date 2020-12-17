
exports.seed = function(knex) {
  return knex('admins').del()
    .then(function () {
      return knex('admins').insert([
        {username: 'adminone', password: hashPassword('adminone'), email: 'adminone@mail.com'},
        {username: 'admintwo', password: hashPassword('admintwo'), email: 'admintwo@mail.com'},
        {username: 'adminthree', password: hashPassword('adminthree'), email: 'adminthree@mail.com'},
      ]);
    });
};

const hashPassword = password => {
  const bcrypt = require('bcryptjs');
  const rounds = 8;
  const hash = bcrypt.hashSync(password, rounds);
  return hash;
};