import { Observable } from 'rxjs';

/**
 * Observables are lazy push collections of multiple values, like multiple promises.
 */
const observable = new Observable(subscriber => {
  subscriber.next('First');
  subscriber.next('Second');
  subscriber.next('Third');
  setTimeout(() => {
    subscriber.next('Last');
    subscriber.complete();
  }, 1000);
  subscriber.next('Fourth');
});

/**
 * To see the values, we need to "subscribe" to the observable. Subscribing is like "calling" the observable.
 */
const subscription = observable.subscribe({
  next(x) {
    console.log(`Received value: ${x}`);
  },
  error(err) {
    console.error(`Something wrong occurred: ${err}`);
  },
  complete() {
    console.log('Subscribe completed.');
  }
});

/**
 * Observables can be unsubscribed from
 */
subscription.unsubscribe();

/**
 * Observables can return multiple values over time, and they can be synchronous, or async with setTimeouts
 */
const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(1);
  subscriber.next(2); // "return" another value
  subscriber.next(3); // "return" yet another
  setTimeout(() => {
    subscriber.next(4); // Happens asynchronously
  }, 2000);
});
 
console.log('Before subscribing to foo');
foo.subscribe(x => {
  console.log(x);
});
console.log('After subscribing to foo');

/**
 * Subscribing to an Observable is like calling a function, providing callbacks where the data will be delivered to.
 */