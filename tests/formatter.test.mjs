import test from 'node:test';
import assert from 'node:assert/strict';
import { formatPrice, formatMarketCap } from '../src/utils/formatter.js';

test('formatPrice formats standard prices', () => {
  assert.equal(formatPrice(42.5), '$42.50');
});

test('formatMarketCap abbreviates large values', () => {
  assert.equal(formatMarketCap(1_200_000_000), '1.20B');
});

test('formatMarketCap formats small values without crashing', () => {
  assert.equal(formatMarketCap(5000), '5,000');
});
