export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  source: string;
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  followUpQuestions?: string[];
  source: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
  solution?: string;
  hints: string[];
  testCases: Array<{
    input: string;
    output: string;
  }>;
  source: string;
}

export const quizQuestions: Question[] = [
  // JavaScript Questions - GeeksforGeeks & FreeCodeCamp
  {
    id: 'js-1',
    question: 'What would be the result of 3+2+"7"?',
    options: [
      '327',
      '57',
      '12',
      'Error'
    ],
    correctAnswer: 1,
    explanation: '3 + 2 is evaluated first, resulting in 5. Then 5 + "7" concatenates to "57" since one operand is a string.',
    difficulty: 'Easy',
    category: 'JavaScript',
    tags: ['operators', 'type-coercion'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'js-2',
    question: 'What is the difference between JavaScript and Java?',
    options: [
      'They are the same language',
      'JavaScript is compiled, Java is interpreted',
      'JavaScript is loosely typed, Java is strongly typed',
      'JavaScript runs only on servers'
    ],
    correctAnswer: 2,
    explanation: 'JavaScript is a loosely typed scripting language, while Java is a strongly typed compiled language.',
    difficulty: 'Easy',
    category: 'JavaScript',
    tags: ['fundamentals', 'comparison'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'js-3',
    question: 'What happens when you declare a variable with const and try to reassign it?',
    options: [
      'The value changes successfully',
      'A TypeError is thrown',
      'The variable becomes undefined',
      'Nothing happens'
    ],
    correctAnswer: 1,
    explanation: 'const variables cannot be reassigned after declaration. Attempting to do so throws a TypeError.',
    difficulty: 'Easy',
    category: 'JavaScript',
    tags: ['const', 'variables', 'errors'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'js-4',
    question: 'What is hoisting in JavaScript?',
    options: [
      'Moving elements up in the DOM',
      'Moving variable and function declarations to the top of scope',
      'Lifting heavy objects in code',
      'A method to optimize performance'
    ],
    correctAnswer: 1,
    explanation: 'Hoisting is JavaScript\'s default behavior of moving variable and function declarations to the top of their scope.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['hoisting', 'scope', 'fundamentals'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'js-5',
    question: 'What is a closure in JavaScript?',
    options: [
      'A way to close JavaScript files',
      'A function that has access to outer scope variables',
      'A method to terminate loops',
      'An error handling mechanism'
    ],
    correctAnswer: 1,
    explanation: 'A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['closures', 'scope', 'functions'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'js-6',
    question: 'What is the difference between == and === in JavaScript?',
    options: [
      'No difference',
      '== compares value only, === compares value and type',
      '=== is slower than ==',
      '== is for numbers, === is for strings'
    ],
    correctAnswer: 1,
    explanation: '== performs type coercion and compares values, while === compares both value and data type without coercion.',
    difficulty: 'Easy',
    category: 'JavaScript',
    tags: ['comparison', 'operators', 'type-coercion'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'js-7',
    question: 'What does the "this" keyword refer to in JavaScript?',
    options: [
      'Always refers to the global object',
      'Always refers to the function itself',
      'Depends on the context in which it is used',
      'Always refers to undefined'
    ],
    correctAnswer: 2,
    explanation: 'The value of "this" depends on the context in which it is used - it can refer to different objects based on how the function is called.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['this', 'context', 'scope'],
    source: 'FreeCodeCamp'
  },

  // React Questions - GeeksforGeeks & FreeCodeCamp
  {
    id: 'react-1',
    question: 'What is ReactJS?',
    options: [
      'A database management system',
      'A JavaScript library for building user interfaces',
      'A server-side framework',
      'A CSS preprocessing tool'
    ],
    correctAnswer: 1,
    explanation: 'ReactJS is a JavaScript library used to build reusable components for the view layer, creating Single Page Applications with component-based architecture.',
    difficulty: 'Easy',
    category: 'React',
    tags: ['fundamentals', 'library'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'react-2',
    question: 'What is the Virtual DOM in React?',
    options: [
      'A real DOM element',
      'A faster version of HTML',
      'An in-memory representation of the real DOM',
      'A CSS framework'
    ],
    correctAnswer: 2,
    explanation: 'Virtual DOM is an in-memory representation of the actual DOM that React uses to optimize updates through a diffing algorithm.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['virtual-dom', 'performance', 'reconciliation'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'react-3',
    question: 'What is the difference between Props and State?',
    options: [
      'Props are mutable, State is immutable',
      'Props are immutable, State is mutable',
      'Both are mutable',
      'Both are immutable'
    ],
    correctAnswer: 1,
    explanation: 'Props are read-only data passed from parent to child components, while State is mutable local data within a component.',
    difficulty: 'Easy',
    category: 'React',
    tags: ['props', 'state', 'components'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'react-4',
    question: 'What are React Hooks?',
    options: [
      'Functions that let you hook into React features from functional components',
      'A way to style components',
      'Methods for making API calls',
      'Event handling mechanisms'
    ],
    correctAnswer: 0,
    explanation: 'React Hooks are functions that let you use state and other React features in functional components.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['hooks', 'functional-components', 'state'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'react-5',
    question: 'What is the difference between controlled and uncontrolled components?',
    options: [
      'No difference',
      'Controlled components manage form data with React state, uncontrolled use refs',
      'Controlled components are faster',
      'Uncontrolled components use more memory'
    ],
    correctAnswer: 1,
    explanation: 'Controlled components manage form element values through React state, while uncontrolled components manage values internally using refs.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['controlled', 'uncontrolled', 'forms', 'refs'],
    source: 'FreeCodeCamp'
  },
  {
    id: 'react-6',
    question: 'What are Pure Components in React?',
    options: [
      'Components that never re-render',
      'Components that only render if props or state change',
      'Components without any props',
      'Components that don\'t use state'
    ],
    correctAnswer: 1,
    explanation: 'Pure Components are components that only re-render when their props or state have actually changed, improving performance.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['pure-components', 'performance', 'optimization'],
    source: 'FreeCodeCamp'
  },

  // Node.js Questions - GeeksforGeeks
  {
    id: 'node-1',
    question: 'What is NodeJS?',
    options: [
      'A web browser',
      'A JavaScript runtime environment for server-side',
      'A database system',
      'A CSS framework'
    ],
    correctAnswer: 1,
    explanation: 'NodeJS is an open-source, cross-platform JavaScript runtime environment built on Chrome\'s V8 engine for executing JavaScript outside the browser.',
    difficulty: 'Easy',
    category: 'Node.js',
    tags: ['fundamentals', 'runtime', 'server-side'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'node-2',
    question: 'What is NPM?',
    options: [
      'Node Package Manager',
      'Node Programming Model',
      'Network Protocol Manager',
      'New Project Manager'
    ],
    correctAnswer: 0,
    explanation: 'NPM stands for Node Package Manager, used to install, share, and manage dependencies in JavaScript applications.',
    difficulty: 'Easy',
    category: 'Node.js',
    tags: ['npm', 'package-manager', 'dependencies'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'node-3',
    question: 'What is the Event Loop in Node.js?',
    options: [
      'A loop that handles synchronous operations',
      'A mechanism that handles asynchronous operations',
      'A way to create infinite loops',
      'An error handling system'
    ],
    correctAnswer: 1,
    explanation: 'The Event Loop is Node.js\'s mechanism for handling asynchronous operations and callbacks, allowing non-blocking I/O.',
    difficulty: 'Hard',
    category: 'Node.js',
    tags: ['event-loop', 'asynchronous', 'concurrency'],
    source: 'GeeksforGeeks'
  },

  // Data Structures Questions - GeeksforGeeks & HackerRank
  {
    id: 'ds-1',
    question: 'The minimum number of stacks needed to implement a queue is',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: 1,
    explanation: 'Two stacks are needed to implement a queue - one for enqueue operations and another for dequeue operations.',
    difficulty: 'Medium',
    category: 'Data Structures',
    tags: ['stack', 'queue', 'implementation'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'ds-2',
    question: 'Which one of the following is an application of Stack Data Structure?',
    options: [
      'Managing function calls',
      'The stock span problem',
      'Arithmetic expression evaluation',
      'All of the above'
    ],
    correctAnswer: 3,
    explanation: 'Stacks are used for managing function calls, solving stock span problems, evaluating arithmetic expressions, and many other applications.',
    difficulty: 'Easy',
    category: 'Data Structures',
    tags: ['stack', 'applications', 'function-calls'],
    source: 'GeeksforGeeks'
  },
  {
    id: 'ds-3',
    question: 'What is the time complexity of searching in a balanced Binary Search Tree?',
    options: [
      'O(n)',
      'O(log n)',
      'O(n²)',
      'O(1)'
    ],
    correctAnswer: 1,
    explanation: 'In a balanced BST, search operations take O(log n) time as the tree height is logarithmic.',
    difficulty: 'Medium',
    category: 'Data Structures',
    tags: ['bst', 'time-complexity', 'search'],
    source: 'HackerRank'
  },

  // Algorithms Questions - HackerRank & InterviewBit
  {
    id: 'algo-1',
    question: 'What is the time complexity of the merge sort algorithm?',
    options: [
      'O(n)',
      'O(n log n)',
      'O(n²)',
      'O(log n)'
    ],
    correctAnswer: 1,
    explanation: 'Merge sort has O(n log n) time complexity in all cases (best, average, and worst) due to its divide-and-conquer approach.',
    difficulty: 'Medium',
    category: 'Algorithms',
    tags: ['sorting', 'merge-sort', 'time-complexity'],
    source: 'HackerRank'
  },
  {
    id: 'algo-2',
    question: 'Which algorithm is best for finding the shortest path in a weighted graph?',
    options: [
      'Breadth-First Search (BFS)',
      'Depth-First Search (DFS)',
      'Dijkstra\'s Algorithm',
      'Linear Search'
    ],
    correctAnswer: 2,
    explanation: 'Dijkstra\'s algorithm is used to find the shortest path from a source vertex to all other vertices in a weighted graph.',
    difficulty: 'Medium',
    category: 'Algorithms',
    tags: ['dijkstra', 'shortest-path', 'graph'],
    source: 'InterviewBit'
  },
  {
    id: 'algo-3',
    question: 'What is the space complexity of the quicksort algorithm?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n²)'
    ],
    correctAnswer: 1,
    explanation: 'Quicksort has O(log n) space complexity in the average case due to recursion stack, though it can be O(n) in worst case.',
    difficulty: 'Hard',
    category: 'Algorithms',
    tags: ['quicksort', 'space-complexity', 'recursion'],
    source: 'InterviewBit'
  }
];

export const interviewQuestions: InterviewQuestion[] = [
  // JavaScript Questions - GeeksforGeeks & FreeCodeCamp
  {
    id: 'int-js-1',
    question: 'How do you concatenate two strings in JavaScript?',
    answer: 'You can concatenate two strings in JavaScript using the "+" operator. For example: let str1 = "Hello"; let str2 = "World"; let result = str1 + " " + str2; This will output "Hello World". You can also use template literals with backticks for more complex string interpolation: `${str1} ${str2}`.',
    difficulty: 'Easy',
    category: 'JavaScript',
    tags: ['strings', 'concatenation', 'operators'],
    followUpQuestions: [
      'What are template literals?',
      'What is the difference between + operator and concat() method?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-js-2',
    question: 'Explain closures in JavaScript with an example.',
    answer: 'Closures occur when a function has access to variables from its outer scope even after the outer function has finished executing. Example: function outerFunction(x) { return function innerFunction(y) { return x + y; }; } const addFive = outerFunction(5); console.log(addFive(3)); // outputs 8. Here, innerFunction has access to variable x even after outerFunction has finished.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['closures', 'scope', 'functions'],
    followUpQuestions: [
      'What are practical applications of closures?',
      'How do closures relate to memory leaks?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-js-3',
    question: 'What is debouncing and how do you implement it?',
    answer: 'Debouncing is a technique that delays function execution and ensures there\'s always a delay between function call and execution. Implementation: function debounce(func, delay) { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; } It\'s commonly used for search autocomplete and API calls on input changes.',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['debouncing', 'optimization', 'performance'],
    followUpQuestions: [
      'What is the difference between debouncing and throttling?',
      'When would you use debouncing over throttling?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-js-4',
    question: 'Explain the difference between call, apply, and bind methods.',
    answer: 'All three methods are used to set the value of "this" in functions. call() invokes function immediately with specified "this" and individual arguments. apply() is similar but takes arguments as an array. bind() returns a new function with bound "this" without invoking immediately. Example: func.call(obj, arg1, arg2); func.apply(obj, [arg1, arg2]); const boundFunc = func.bind(obj);',
    difficulty: 'Medium',
    category: 'JavaScript',
    tags: ['call', 'apply', 'bind', 'this'],
    followUpQuestions: [
      'When would you use bind over call or apply?',
      'How does arrow function behavior differ with these methods?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-js-5',
    question: 'What is currying in JavaScript?',
    answer: 'Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Example: function add(a, b, c) { return a + b + c; } can become: function curriedAdd(a) { return function(b) { return function(c) { return a + b + c; }; }; } This enables partial application and creates reusable functions.',
    difficulty: 'Hard',
    category: 'JavaScript',
    tags: ['currying', 'functional-programming', 'higher-order-functions'],
    followUpQuestions: [
      'What are the benefits of currying?',
      'How does currying relate to partial application?'
    ],
    source: 'FreeCodeCamp'
  },

  // React Questions - GeeksforGeeks & FreeCodeCamp
  {
    id: 'int-react-1',
    question: 'What are the main building blocks of React?',
    answer: 'The five main building blocks of React are: 1) Components - reusable blocks of code that return HTML, 2) JSX - JavaScript XML that allows writing HTML in React, 3) Props and State - props are like function parameters while state is local component data, 4) Context - allows data passing through component hierarchy, 5) Virtual DOM - lightweight copy of actual DOM for efficient updates.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['components', 'jsx', 'props', 'state', 'virtual-dom'],
    followUpQuestions: [
      'How does the Virtual DOM improve performance?',
      'What is the difference between props and state?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-react-2',
    question: 'Explain the React component lifecycle.',
    answer: 'React components go through three phases: Mounting (component created and added to DOM - constructor, componentDidMount), Updating (component re-renders due to state/props changes - componentDidUpdate), and Unmounting (component removed from DOM - componentWillUnmount). In functional components, useEffect hook manages lifecycle: useEffect(() => {}, []) for mounting, useEffect with dependencies for updates, and return cleanup function for unmounting.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['lifecycle', 'mounting', 'updating', 'unmounting', 'useEffect'],
    followUpQuestions: [
      'How do you handle cleanup in useEffect?',
      'What happens if you forget to include dependencies in useEffect?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-react-3',
    question: 'What is the useState hook and how does it work?',
    answer: 'useState is a React hook that adds state to functional components. It takes an initial value and returns an array with current state and a setter function. Example: const [count, setCount] = useState(0); The setter function triggers re-renders when state changes. Unlike class components, you can have multiple useState hooks in one component for different state variables.',
    difficulty: 'Easy',
    category: 'React',
    tags: ['useState', 'hooks', 'state', 'functional-components'],
    followUpQuestions: [
      'How does useState differ from class component state?',
      'Can you use useState with objects and arrays?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-react-4',
    question: 'What is the useEffect hook and its use cases?',
    answer: 'useEffect hook handles side effects in functional components like API calls, subscriptions, and DOM manipulation. It takes a function and optional dependency array. useEffect(() => {}, []) runs once on mount, useEffect(() => {}, [dep]) runs when dep changes, useEffect(() => {}) runs on every render. Return a cleanup function for unmounting logic. It replaces componentDidMount, componentDidUpdate, and componentWillUnmount.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['useEffect', 'hooks', 'side-effects', 'lifecycle'],
    followUpQuestions: [
      'How do you prevent infinite loops with useEffect?',
      'What are the rules of hooks?'
    ],
    source: 'FreeCodeCamp'
  },
  {
    id: 'int-react-5',
    question: 'Explain controlled vs uncontrolled components.',
    answer: 'Controlled components have form data handled by React state. The input value is controlled by state and changes through event handlers. Example: <input value={value} onChange={handleChange} />. Uncontrolled components manage their own state internally, accessed via refs. Example: <input ref={inputRef} />. Controlled components provide better control and validation, while uncontrolled components are simpler for basic forms.',
    difficulty: 'Medium',
    category: 'React',
    tags: ['controlled', 'uncontrolled', 'forms', 'state', 'refs'],
    followUpQuestions: [
      'When should you use controlled vs uncontrolled components?',
      'How do you handle file inputs in controlled components?'
    ],
    source: 'FreeCodeCamp'
  },

  // Node.js Questions - GeeksforGeeks
  {
    id: 'int-node-1',
    question: 'What are modules in NodeJS and how do you use them?',
    answer: 'Modules in NodeJS are reusable blocks of code that provide functionality and can communicate with external applications. They can be single files or collections of files/folders. Built-in modules include http, fs, os, path. Use require() to import: const fs = require(\'fs\'). Create custom modules by exporting: module.exports = {function}; then import with require(\'./module\'). ES6 modules use import/export syntax.',
    difficulty: 'Easy',
    category: 'Node.js',
    tags: ['modules', 'require', 'exports', 'commonjs'],
    followUpQuestions: [
      'What is the difference between CommonJS and ES6 modules?',
      'How do you create and publish an npm package?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-node-2',
    question: 'Explain the Event Loop in Node.js.',
    answer: 'The Event Loop is Node.js\'s mechanism for handling asynchronous operations in a single-threaded environment. It has phases: Timers (setTimeout, setInterval), Pending callbacks (I/O operations), Poll (fetch new I/O events), Check (setImmediate callbacks), Close callbacks. It continuously cycles through these phases, executing callbacks when their conditions are met, enabling non-blocking I/O despite being single-threaded.',
    difficulty: 'Hard',
    category: 'Node.js',
    tags: ['event-loop', 'asynchronous', 'phases', 'non-blocking'],
    followUpQuestions: [
      'What is the difference between setImmediate and setTimeout?',
      'How does Node.js handle CPU-intensive tasks?'
    ],
    source: 'GeeksforGeeks'
  },
  {
    id: 'int-node-3',
    question: 'What is middleware in Express.js?',
    answer: 'Middleware are functions that execute during the request-response cycle in Express.js. They have access to request (req), response (res), and next function. Middleware can modify req/res objects, end the request-response cycle, or call next() to pass control. Types include application-level, router-level, error-handling, built-in, and third-party middleware. Example: app.use((req, res, next) => { console.log(Date.now()); next(); });',
    difficulty: 'Medium',
    category: 'Node.js',
    tags: ['middleware', 'express', 'request-response', 'next'],
    followUpQuestions: [
      'How do you handle errors in Express middleware?',
      'What is the difference between app.use() and app.get()?'
    ],
    source: 'GeeksforGeeks'
  },

  // Algorithm Questions - HackerRank & InterviewBit
  {
    id: 'int-algo-1',
    question: 'Explain the Binary Search algorithm and its implementation.',
    answer: 'Binary Search is a divide-and-conquer algorithm for finding elements in sorted arrays. It works by repeatedly dividing the search interval in half. Compare target with middle element: if equal, found; if target is smaller, search left half; if larger, search right half. Time complexity: O(log n), Space complexity: O(1). Implementation: while(left <= right) { mid = (left + right) / 2; compare and adjust left/right }',
    difficulty: 'Medium',
    category: 'Algorithms',
    tags: ['binary-search', 'divide-and-conquer', 'searching'],
    followUpQuestions: [
      'How do you handle edge cases in binary search?',
      'What are variations of binary search?'
    ],
    source: 'HackerRank'
  },
  {
    id: 'int-algo-2',
    question: 'What is Dynamic Programming and when do you use it?',
    answer: 'Dynamic Programming solves complex problems by breaking them into simpler subproblems and storing results to avoid recomputation. It applies to problems with overlapping subproblems and optimal substructure. Two approaches: 1) Top-down (Memoization) - solve recursively and cache results, 2) Bottom-up (Tabulation) - solve iteratively from base cases. Examples: Fibonacci, Longest Common Subsequence, Knapsack problem.',
    difficulty: 'Hard',
    category: 'Algorithms',
    tags: ['dynamic-programming', 'memoization', 'optimization'],
    followUpQuestions: [
      'What is the difference between memoization and tabulation?',
      'How do you identify if a problem can use DP?'
    ],
    source: 'InterviewBit'
  }
];

export const codingExercises: Exercise[] = [
  // Basic Algorithms - LeetCode & HackerRank
  {
    id: 'ex-1',
    title: 'Two Sum Problem',
    description: 'Given an array of integers and a target sum, return indices of two numbers that add up to the target.',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['arrays', 'hash-map', 'two-pointers'],
    hints: [
      'Use a hash map to store values and their indices',
      'For each element, check if target - element exists in the hash map'
    ],
    testCases: [
      {
        input: 'nums = [2,7,11,15], target = 9',
        output: '[0,1]'
      },
      {
        input: 'nums = [3,2,4], target = 6',
        output: '[1,2]'
      }
    ],
    solution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
    source: 'GeeksforGeeks'
  },
  {
    id: 'ex-2',
    title: 'Reverse String In-Place',
    description: 'Write a function that reverses a string in-place. The input string is given as an array of characters.',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['strings', 'two-pointers', 'in-place'],
    hints: [
      'Use two pointers approach from start and end',
      'Swap characters while moving pointers toward center',
      'No extra space should be used'
    ],
    testCases: [
      {
        input: 's = ["h","e","l","l","o"]',
        output: '["o","l","l","e","h"]'
      },
      {
        input: 's = ["H","a","n","n","a","h"]',
        output: '["h","a","n","n","a","H"]'
      }
    ],
    solution: `function reverseString(s) {
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // Swap characters
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}`,
    source: 'GeeksforGeeks'
  },
  {
    id: 'ex-3',
    title: 'Valid Parentheses',
    description: 'Given a string containing just characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
    difficulty: 'Easy',
    category: 'Stack',
    tags: ['stack', 'strings', 'parentheses'],
    hints: [
      'Use a stack to keep track of opening brackets',
      'For each closing bracket, check if it matches the most recent opening bracket',
      'String is valid if stack is empty at the end'
    ],
    testCases: [
      {
        input: 's = "()"',
        output: 'true'
      },
      {
        input: 's = "()[]{}"',
        output: 'true'
      },
      {
        input: 's = "(]"',
        output: 'false'
      }
    ],
    solution: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    
    for (let char of s) {
        if (char in map) {
            // It's a closing bracket
            if (stack.pop() !== map[char]) {
                return false;
            }
        } else {
            // It's an opening bracket
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}`,
    source: 'GeeksforGeeks'
  },

  // HackerRank Style Problems
  {
    id: 'ex-4',
    title: 'Find Nth Largest Element',
    description: 'Given an array of numbers, find the Nth largest element.',
    difficulty: 'Medium',
    category: 'Arrays',
    tags: ['arrays', 'sorting', 'kth-element'],
    hints: [
      'Sort the array in descending order',
      'Return the element at index n-1',
      'Consider edge cases like duplicate elements'
    ],
    testCases: [
      {
        input: 'numbers = [3, 1, 4, 1, 5, 9, 2, 6], n = 3',
        output: '5'
      },
      {
        input: 'numbers = [10, 20, 30, 40, 50], n = 2',
        output: '40'
      }
    ],
    solution: `function findNthLargest(numbers, n) {
    // Sort in descending order
    numbers.sort((a, b) => b - a);
    
    // Return nth largest (n-1 index due to 0-based indexing)
    return numbers[n - 1];
}`,
    source: 'HackerRank'
  },
  {
    id: 'ex-5',
    title: 'Implement Linked List',
    description: 'Implement a LinkedList class with insert, delete, and search operations.',
    difficulty: 'Medium',
    category: 'Linked Lists',
    tags: ['linked-lists', 'data-structures', 'implementation'],
    hints: [
      'Create a Node class with value and next properties',
      'Implement insert at the end of the list',
      'Handle edge cases for deletion (head deletion, not found)'
    ],
    testCases: [
      {
        input: 'list.insert(5); list.insert(10); list.search(5)',
        output: 'true'
      },
      {
        input: 'list.insert(5); list.delete(5); list.search(5)',
        output: 'false'
      }
    ],
    solution: `class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    
    delete(value) {
        if (!this.head) return;
        
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }
        
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        
        if (current.next) {
            current.next = current.next.next;
        }
    }
    
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}`,
    source: 'HackerRank'
  },

  // InterviewBit Style Problems
  {
    id: 'ex-6',
    title: 'Rotate Array',
    description: 'Rotate an array to the right by k steps, where k is non-negative.',
    difficulty: 'Medium',
    category: 'Arrays',
    tags: ['arrays', 'rotation', 'in-place'],
    hints: [
      'Use array reversal technique',
      'Reverse entire array, then reverse first k elements, then reverse remaining',
      'Handle k greater than array length with modulo'
    ],
    testCases: [
      {
        input: 'nums = [1,2,3,4,5,6,7], k = 3',
        output: '[5,6,7,1,2,3,4]'
      },
      {
        input: 'nums = [-1,-100,3,99], k = 2',
        output: '[3,99,-1,-100]'
      }
    ],
    solution: `function rotate(nums, k) {
    k = k % nums.length;
    
    // Helper function to reverse array between indices
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    }
    
    // Reverse entire array
    reverse(nums, 0, nums.length - 1);
    
    // Reverse first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse remaining elements
    reverse(nums, k, nums.length - 1);
}`,
    source: 'InterviewBit'
  },

  // Codewars Style Challenges
  {
    id: 'ex-7',
    title: 'Moving Zeros to End',
    description: 'Move all zeros in an array to the end while maintaining the relative order of non-zero elements.',
    difficulty: 'Easy',
    category: 'Arrays',
    tags: ['arrays', 'two-pointers', 'in-place'],
    hints: [
      'Use two pointers - one for current position, one for non-zero position',
      'When you find a non-zero element, move it to the non-zero position',
      'Fill remaining positions with zeros'
    ],
    testCases: [
      {
        input: '[0,1,0,3,12]',
        output: '[1,3,12,0,0]'
      },
      {
        input: '[0,0,1]',
        output: '[1,0,0]'
      }
    ],
    solution: `function moveZeros(arr) {
    let nonZeroIndex = 0;
    
    // Move all non-zero elements to front
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex] = arr[i];
            nonZeroIndex++;
        }
    }
    
    // Fill remaining positions with zeros
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex] = 0;
        nonZeroIndex++;
    }
    
    return arr;
}`,
    source: 'Codewars'
  },

  // FreeCodeCamp Style Problems
  {
    id: 'ex-8',
    title: 'Title Case a Sentence',
    description: 'Return the provided string with the first letter of each word capitalized.',
    difficulty: 'Easy',
    category: 'Strings',
    tags: ['strings', 'manipulation', 'formatting'],
    hints: [
      'Split the string into words',
      'Capitalize first letter of each word and make rest lowercase',
      'Join the words back together'
    ],
    testCases: [
      {
        input: '"I\'m a little tea pot"',
        output: '"I\'m A Little Tea Pot"'
      },
      {
        input: '"sHoRt AnD sToUt"',
        output: '"Short And Stout"'
      }
    ],
    solution: `function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}`,
    source: 'FreeCodeCamp'
  },
  {
    id: 'ex-9',
    title: 'Fibonacci Sequence',
    description: 'Generate the Fibonacci sequence up to n terms.',
    difficulty: 'Medium',
    category: 'Algorithms',
    tags: ['fibonacci', 'dynamic-programming', 'recursion'],
    hints: [
      'Use dynamic programming approach for efficiency',
      'Store previous two numbers and calculate next',
      'Can also be solved recursively but less efficient'
    ],
    testCases: [
      {
        input: 'n = 5',
        output: '[0, 1, 1, 2, 3]'
      },
      {
        input: 'n = 8',
        output: '[0, 1, 1, 2, 3, 5, 8, 13]'
      }
    ],
    solution: `function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    
    return fib;
}`,
    source: 'FreeCodeCamp'
  }
];

export const categories = [
  'All',
  'JavaScript',
  'React',
  'Node.js',
  'Data Structures',
  'Algorithms',
  'Arrays',
  'Strings',
  'Stack',
  'Linked Lists'
];

export const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

export const sources = [
  'All',
  'GeeksforGeeks',
  'LeetCode',
  'HackerRank',
  'InterviewBit',
  'Codewars',
  'FreeCodeCamp'
];