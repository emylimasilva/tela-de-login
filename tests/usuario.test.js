const Usuario = require('../models/Usuario');

test('login com credenciais corretas retorna true', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('t@t.com','senha')).toBe(true);
});

test('login com senha incorreta retorna false', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('t@t.com','senhaErrada')).toBe(false);
});

test('login com campos vazios retorna false', () => {
  const u = new Usuario('Teste','t@t.com','senha');
  expect(u.validarLogin('','')).toBe(false);
});
