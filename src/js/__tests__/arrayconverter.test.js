import ArrayBufferConverter from '../arrayconverter.js';
import getBuffer from '../app.js';

test('loading data into buffer', () => {
  const bufferArray = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferArray.load(buffer);
  expect(bufferArray.buffer).toEqual(getBuffer());
});

test('returning a string from a buffer', () => {
  const bufferArray = new ArrayBufferConverter();
  const buffer = getBuffer();
  bufferArray.load(buffer);
  expect(bufferArray.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
