import { run, test } from 'beater';
import * as assert from 'power-assert';

import {
  History,
  back,
  create,
  current,
  currentState,
  forward,
  go,
  length,
  next,
  nextState,
  previous,
  previousState,
  pushState,
  replaceState,
  state
} from '../src';

const category = 'index > ';

const tests = [
  test(category + 'initial state', () => {
    const history: History = create(); // test History interface
    assert(length(history) === 0);
    assert(state(history) === null);
    assert(current(history) === null); // extended
    assert(currentState(history) === null); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push', () => {
    const p0 = create();
    const history = pushState(p0, 1, '1', '/1');
    assert(length(history) === 1);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const history = pushState(p2, 3, '3', '/3');
    assert(length(history) === 3);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/2'); // extended
    assert(previousState(history) === 2); // extended
  }),

  test(category + 'push * 3 & back', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const history = back(p3);
    assert(length(history) === 3);
    assert(state(history) === 2);
    assert(current(history) === '/2'); // extended
    assert(currentState(history) === 2); // extended
    assert(next(history) === '/3'); // extended
    assert(nextState(history) === 3); // extended
    assert(previous(history) === '/1'); // extended
    assert(previousState(history) === 1); // extended
  }),

  test(category + 'push * 3 & back * 2', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const b1 = back(p3);
    const history = back(b1);
    assert(length(history) === 3);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === '/2'); // extended
    assert(nextState(history) === 2); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3 & back * 3 // ignore', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const b1 = back(p3);
    const b2 = back(b1);
    const history = back(b2); // ignore
    assert(length(history) === 3);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === '/2'); // extended
    assert(nextState(history) === 2); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3 & back * 2 & forward', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const b1 = back(p3);
    const b2 = back(b1);
    const history = forward(b2);
    assert(length(history) === 3);
    assert(state(history) === 2);
    assert(current(history) === '/2'); // extended
    assert(currentState(history) === 2); // extended
    assert(next(history) === '/3'); // extended
    assert(nextState(history) === 3); // extended
    assert(previous(history) === '/1'); // extended
    assert(previousState(history) === 1); // extended
  }),

  test(category + 'push * 3 & back * 2 & forward * 2', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const b1 = back(p3);
    const b2 = back(b1);
    const f1 = forward(b2);
    const history = forward(f1);
    assert(length(history) === 3);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/2'); // extended
    assert(previousState(history) === 2); // extended
  }),

  test(category + 'push * 3 & back * 2 & forward * 3 // ignore', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const b1 = back(p3);
    const b2 = back(b1);
    const f1 = forward(b2);
    const f2 = forward(f1);
    const history = forward(f2); // ignore
    assert(length(history) === 3);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/2'); // extended
    assert(previousState(history) === 2); // extended
  }),

  test(category + 'push * 3 & go(-1)', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const history = go(p3, -1);
    assert(length(history) === 3);
    assert(state(history) === 2);
    assert(current(history) === '/2'); // extended
    assert(currentState(history) === 2); // extended
    assert(next(history) === '/3'); // extended
    assert(nextState(history) === 3); // extended
    assert(previous(history) === '/1'); // extended
    assert(previousState(history) === 1); // extended
  }),

  test(category + 'push * 3 & go(-2)', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const history = go(p3, -2);
    assert(length(history) === 3);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === '/2'); // extended
    assert(nextState(history) === 2); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3 & go(-3) // ignore', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const history = go(p3, -3); // ignore
    assert(length(history) === 3);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/2'); // extended
    assert(previousState(history) === 2); // extended
  }),

  test(category + 'push * 3 & go(-2) & go(1)', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const history = go(g1, 1);
    assert(length(history) === 3);
    assert(state(history) === 2);
    assert(current(history) === '/2'); // extended
    assert(currentState(history) === 2); // extended
    assert(next(history) === '/3'); // extended
    assert(nextState(history) === 3); // extended
    assert(previous(history) === '/1'); // extended
    assert(previousState(history) === 1); // extended
  }),

  test(category + 'push * 3 & go(-2) & go(2)', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const history = go(g1, 2);
    assert(length(history) === 3);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/2'); // extended
    assert(previousState(history) === 2); // extended
  }),

  test(category + 'push * 3 & go(-2) & go(3) // ignore', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const history = go(g1, 3); // ignore
    assert(length(history) === 3);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === '/2'); // extended
    assert(nextState(history) === 2); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3 & go(-2) & push', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const history = pushState(g1, 4, '4', '/4');
    assert(length(history) === 2);
    assert(state(history) === 4);
    assert(current(history) === '/4'); // extended
    assert(currentState(history) === 4); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === '/1'); // extended
    assert(previousState(history) === 1); // extended
  }),

  test(category + 'push * 3 & go(-2) & replace', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const history = replaceState(g1, 4, '4', '/4');
    assert(length(history) === 1);
    assert(state(history) === 4);
    assert(current(history) === '/4'); // extended
    assert(currentState(history) === 4); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'push * 3 & go(-2) & replace * 2', () => {
    const p0 = create();
    const p1 = pushState(p0, 1, '1', '/1');
    const p2 = pushState(p1, 2, '2', '/2');
    const p3 = pushState(p2, 3, '3', '/3');
    const g1 = go(p3, -2);
    const r1 = replaceState(g1, 4, '4', '/4');
    const history = replaceState(r1, 5, '5', '/5');
    assert(length(history) === 1);
    assert(state(history) === 5);
    assert(current(history) === '/5'); // extended
    assert(currentState(history) === 5); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'replace', () => {
    const r0 = create();
    const history = replaceState(r0, 1, '1', '/1');
    assert(length(history) === 1);
    assert(state(history) === 1);
    assert(current(history) === '/1'); // extended
    assert(currentState(history) === 1); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  }),

  test(category + 'replace * 3', () => {
    const r0 = create();
    const r1 = replaceState(r0, 1, '1', '/1');
    const r2 = replaceState(r1, 2, '2', '/2');
    const history = replaceState(r2, 3, '3', '/3');
    assert(length(history) === 1);
    assert(state(history) === 3);
    assert(current(history) === '/3'); // extended
    assert(currentState(history) === 3); // extended
    assert(next(history) === null); // extended
    assert(nextState(history) === null); // extended
    assert(previous(history) === null); // extended
    assert(previousState(history) === null); // extended
  })
];

run(tests).catch(() => process.exit(1));
