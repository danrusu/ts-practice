import Person from '@/demo/Person';

const person = new Person('Dan');
person.message();

const text = ['aaa', 'bbb', 'ccc', 'aaa', 'bbb', 'ccc'];
const newText = [...new Set(text)];

console.log(newText);
