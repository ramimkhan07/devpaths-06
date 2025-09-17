import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Clock, CheckCircle, Star, Bookmark, ExternalLink, PlayCircle, FileText, Video, Link2, Circle, Users, ThumbsUp, MessageSquare, Share, Download, Code, Zap, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { ResourceCard } from '@/components/ResourceCard';
import { InteractiveFeatures } from '@/components/InteractiveFeatures';
import { getResourcesByTopic } from '@/data/resourcesDatabase';

const TopicDetail = () => {
  const { topicId } = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeResource, setActiveResource] = useState(0);
  const [userProgress, setUserProgress] = useState(25);

  const topicData = {
    'react-basics': {
      title: 'React Fundamentals',
      subtitle: 'Master the Building Blocks of Modern Web Development',
      description: 'Learn the core concepts of React including components, props, state, and the component lifecycle to build dynamic, interactive user interfaces.',
      estimatedTime: '3-4 weeks',
      difficulty: 'Intermediate',
      roadmap: 'Frontend Development',
      category: 'Frameworks',
      importance: 'Critical',
      completionRate: '87%',
      learners: '1.2M',
      rating: 4.8,
      reviews: 15420,
      lastUpdated: 'December 2024',
      
      overview: `React is the most popular JavaScript library for building user interfaces, developed and maintained by Meta (Facebook). It revolutionized frontend development by introducing a component-based architecture that promotes reusability, maintainability, and scalability.

In this comprehensive module, you'll master the fundamental concepts that every React developer needs to know. We'll start with understanding React's philosophy and core principles, then dive deep into components, JSX, props, and state management.

By the end of this topic, you'll be able to build dynamic, interactive web applications using React's powerful paradigms and best practices.`,
      
      learningObjectives: [
        'Understand React\'s component-based architecture and virtual DOM',
        'Create both functional and class components effectively',
        'Master JSX syntax and rendering patterns',
        'Pass data between components using props and callbacks',
        'Manage component state with useState and class state',
        'Handle user interactions and events in React applications',
        'Understand component lifecycle and when to use useEffect',
        'Apply React best practices and common patterns'
      ],
      
      prerequisites: [
        'Solid understanding of JavaScript ES6+ features',
        'Experience with HTML and CSS',
        'Basic knowledge of DOM manipulation',
        'Understanding of asynchronous JavaScript'
      ],
      
      skillsGained: [
        'React Components', 'JSX', 'Props', 'State Management', 'Event Handling', 
        'Component Lifecycle', 'Virtual DOM', 'React Patterns', 'Debugging'
      ],
      
      content: {
        introduction: {
          title: 'What is React?',
          duration: '20 min read',
          content: `React is a JavaScript library for building user interfaces, particularly single-page applications where you need a fast, interactive user experience. Here's what makes React special:

**Component-Based Architecture**
React applications are built using components - independent, reusable pieces of code that return JSX elements describing what should appear on the screen. This approach promotes:
• Code reusability and modularity
• Easier testing and debugging  
• Better separation of concerns
• Improved maintainability

**Virtual DOM**
React uses a virtual representation of the DOM in memory. When state changes occur, React:
1. Creates a new virtual DOM tree
2. Compares it with the previous virtual DOM tree (diffing)
3. Updates only the parts of the real DOM that changed (reconciliation)

This process makes React applications fast and responsive.

**Declarative Programming**
Instead of imperatively manipulating the DOM, you describe what the UI should look like for any given state, and React handles the updates for you.

**Learn Once, Write Anywhere**
React's patterns can be applied to:
• Web applications (React DOM)
• Mobile apps (React Native)  
• Desktop applications (Electron with React)
• Server-side rendering (Next.js)`
        },
        
        components: {
          title: 'Components & JSX',
          duration: '45 min read',
          content: `Components are the heart of React applications. They let you split the UI into independent, reusable pieces that can be thought about in isolation.

**Functional Components**
The modern way to write React components:

\`\`\`jsx
function Welcome({ name, age }) {
  return (
    <div className="welcome-container">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <button onClick={() => alert('Welcome!')}>
        Say Hello
      </button>
    </div>
  );
}

// Usage
<Welcome name="Alice" age={25} />
\`\`\`

**JSX (JavaScript XML)**
JSX is a syntax extension that allows you to write HTML-like code in JavaScript:

**Key JSX Rules:**
• Must return a single parent element (or React Fragment)
• Use camelCase for HTML attributes (className, onClick)
• Self-closing tags must end with />
• JavaScript expressions go inside curly braces {}
• Use React.Fragment or <> </> for multiple elements without wrapper

**Advanced JSX Patterns:**

\`\`\`jsx
function UserProfile({ user, isLoggedIn }) {
  return (
    <>
      {isLoggedIn ? (
        <div className="user-profile">
          <img src={user.avatar} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          {user.skills.map(skill => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      ) : (
        <LoginPrompt />
      )}
    </>
  );
}
\`\`\`

**Component Composition**
Build complex UIs by composing smaller components:

\`\`\`jsx
function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Sidebar />
        <Content>
          <ArticleList />
        </Content>
      </main>
      <Footer />
    </div>
  );
}
\`\`\``
        },
        
        props: {
          title: 'Props: Component Communication',
          duration: '35 min read',
          content: `Props (short for "properties") are how components communicate with each other. They allow you to pass data from parent components to child components.

**Basic Props Usage:**

\`\`\`jsx
// Parent Component
function App() {
  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    role: 'developer'
  };

  return (
    <UserCard 
      user={user}
      theme="dark"
      showEmail={true}
      onEdit={() => console.log('Edit user')}
    />
  );
}

// Child Component
function UserCard({ user, theme, showEmail, onEdit }) {
  return (
    <div className={\`user-card \${theme}\`}>
      <h3>{user.name}</h3>
      <p>Role: {user.role}</p>
      {showEmail && <p>Email: {user.email}</p>}
      <button onClick={onEdit}>Edit Profile</button>
    </div>
  );
}
\`\`\`

**Props Patterns:**

**Default Props:**
\`\`\`jsx
function Button({ children, variant = 'primary', size = 'medium' }) {
  return (
    <button className={\`btn btn-\${variant} btn-\${size}\`}>
      {children}
    </button>
  );
}
\`\`\`

**Prop Destructuring:**
\`\`\`jsx
// Instead of using props.name, props.age
function User(props) {
  return <div>{props.name} is {props.age} years old</div>;
}

// Use destructuring for cleaner code
function User({ name, age, ...otherProps }) {
  return (
    <div {...otherProps}>
      {name} is {age} years old
    </div>
  );
}
\`\`\`

**Children Prop:**
\`\`\`jsx
function Modal({ children, isOpen, onClose }) {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}

// Usage
<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
  <h2>Confirm Action</h2>
  <p>Are you sure you want to delete this item?</p>
  <button>Yes, Delete</button>
</Modal>
\`\`\`

**Important Rules:**
• Props are read-only (immutable)
• Always treat props as pure - never modify them
• Use callbacks to communicate back to parent components
• Consider using TypeScript for better prop validation`
        },
        
        state: {
          title: 'State Management with Hooks',
          duration: '50 min read',
          content: `State allows components to create and manage their own data. Unlike props, state is mutable and private to the component that owns it.

**useState Hook Fundamentals:**

\`\`\`jsx
import { useState } from 'react';

function Counter() {
  // useState returns [currentValue, setterFunction]
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [user, setUser] = useState({ name: '', email: '' });

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(prev => prev - 1); // Functional update
  
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
}
\`\`\`

**State Update Patterns:**

**Functional Updates:**
\`\`\`jsx
// When new state depends on previous state
const [todos, setTodos] = useState([]);

const addTodo = (newTodo) => {
  setTodos(prevTodos => [...prevTodos, newTodo]);
};

const toggleTodo = (id) => {
  setTodos(prevTodos => 
    prevTodos.map(todo => 
      todo.id === id 
        ? { ...todo, completed: !todo.completed }
        : todo
    )
  );
};
\`\`\`

**Object State Updates:**
\`\`\`jsx
const [user, setUser] = useState({
  name: '',
  email: '',
  preferences: { theme: 'light', notifications: true }
});

// Update nested object state
const updatePreferences = (newPrefs) => {
  setUser(prevUser => ({
    ...prevUser,
    preferences: {
      ...prevUser.preferences,
      ...newPrefs
    }
  }));
};
\`\`\`

**Complex State Management:**

\`\`\`jsx
function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos(prev => [...prev, {
        id: Date.now(),
        text: newTodo,
        completed: false,
        createdAt: new Date()
      }]);
      setNewTodo('');
    }
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div>
      <input 
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && addTodo()}
      />
      <button onClick={addTodo}>Add Todo</button>
      
      <div>
        {['all', 'active', 'completed'].map(filterType => (
          <button 
            key={filterType}
            onClick={() => setFilter(filterType)}
            className={filter === filterType ? 'active' : ''}
          >
            {filterType}
          </button>
        ))}
      </div>
      
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
        ))}
      </ul>
    </div>
  );
}
\`\`\`

**State Best Practices:**
• Keep state as simple as possible
• Don't put derived data in state
• Use multiple state variables for unrelated data
• Consider using useReducer for complex state logic
• Lift state up when multiple components need it`
        },
        
        events: {
          title: 'Event Handling & User Interactions',
          duration: '30 min read',
          content: `React handles events through its synthetic event system, which provides consistent behavior across different browsers while maintaining performance.

**Basic Event Handling:**

\`\`\`jsx
function EventExamples() {
  const [message, setMessage] = useState('');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleClick = (event) => {
    console.log('Button clicked!', event.target);
    setMessage('Button was clicked!');
  };

  const handleMouseMove = (event) => {
    setMousePos({ x: event.clientX, y: event.clientY });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    console.log('Form submitted');
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <button onClick={handleClick}>Click me</button>
      <p>{message}</p>
      <p>Mouse: {mousePos.x}, {mousePos.y}</p>
      
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
\`\`\`

**Event Handler Patterns:**

**Inline Event Handlers:**
\`\`\`jsx
// Good for simple operations
<button onClick={() => setCount(count + 1)}>
  Increment
</button>

// Passing parameters
<button onClick={() => deleteItem(item.id)}>
  Delete {item.name}
</button>
\`\`\`

**Event Handler Methods:**
\`\`\`jsx
function UserList({ users, onUserSelect }) {
  const handleUserClick = (userId) => {
    console.log('User selected:', userId);
    onUserSelect(userId);
  };

  return (
    <ul>
      {users.map(user => (
        <li 
          key={user.id}
          onClick={() => handleUserClick(user.id)}
          className="user-item"
        >
          {user.name}
        </li>
      ))}
    </ul>
  );
}
\`\`\`

**Form Handling:**

\`\`\`jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      await submitForm(formData);
      setFormData({ name: '', email: '', message: '' });
      alert('Form submitted successfully!');
    } catch (error) {
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your email"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your message"
        required
      />
      <button type="submit">Send Message</button>
    </form>
  );
}
\`\`\`

**Advanced Event Patterns:**

**Event Delegation:**
\`\`\`jsx
function TodoList({ todos, onTodoAction }) {
  const handleListClick = (event) => {
    const action = event.target.dataset.action;
    const todoId = event.target.dataset.todoId;
    
    if (action && todoId) {
      onTodoAction(action, todoId);
    }
  };

  return (
    <ul onClick={handleListClick}>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button data-action="toggle" data-todo-id={todo.id}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button data-action="delete" data-todo-id={todo.id}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
\`\`\``
        }
      },
      
      resources: [
        {
          type: 'video',
          title: 'React in 100 Seconds',
          description: 'Quick overview of React fundamentals by Fireship',
          url: 'https://youtu.be/Tn6-PIqc4UM',
          duration: '2 min',
          difficulty: 'Beginner',
          free: true,
          rating: 4.9,
          views: '2.1M'
        },
        {
          type: 'article',
          title: 'Official React Documentation - Quick Start',
          description: 'The official React team\'s comprehensive getting started guide',
          url: 'https://react.dev/learn',
          duration: '45 min read',
          difficulty: 'Beginner',
          free: true,
          rating: 4.8,
          views: '5.2M'
        },
        {
          type: 'video',
          title: 'Complete React Course for Beginners',
          description: 'Full-length course covering all React fundamentals with projects',
          url: '#',
          duration: '8 hours',
          difficulty: 'Beginner',
          free: false,
          rating: 4.7,
          views: '890K'
        },
        {
          type: 'article',
          title: 'React Component Patterns',
          description: 'Advanced patterns and best practices for React components',
          url: '#',
          duration: '25 min read',
          difficulty: 'Intermediate',
          free: true,
          rating: 4.6,
          views: '450K'
        },
        {
          type: 'interactive',
          title: 'React Interactive Tutorial',
          description: 'Hands-on coding exercises to practice React concepts',
          url: '#',
          duration: '3 hours',
          difficulty: 'Beginner',
          free: true,
          rating: 4.8,
          views: '1.2M'
        },
        {
          type: 'tool',
          title: 'React Developer Tools',
          description: 'Browser extension for debugging React applications',
          url: 'https://react.dev/learn/react-developer-tools',
          duration: 'Tool',
          difficulty: 'All Levels',
          free: true,
          rating: 4.9,
          views: '10M+'
        }
      ],
      
      exercises: [
        {
          id: 'greeting-component',
          title: 'Create Your First Component',
          description: 'Build a greeting component that accepts name and age props, displays a personalized message, and includes a button that shows an alert when clicked.',
          difficulty: 'Beginner',
          time: '20 min',
          skills: ['Components', 'Props', 'JSX', 'Event Handling'],
          starter: 'https://codesandbox.io/s/react-greeting-starter',
          solution: 'https://codesandbox.io/s/react-greeting-solution'
        },
        {
          id: 'counter-app',
          title: 'Interactive Counter Application',
          description: 'Build a counter with increment, decrement, and reset buttons. Add features like step size control and prevent negative numbers.',
          difficulty: 'Beginner',
          time: '45 min',
          skills: ['State', 'useState', 'Event Handling', 'Conditional Rendering'],
          starter: 'https://codesandbox.io/s/react-counter-starter',
          solution: 'https://codesandbox.io/s/react-counter-solution'
        },
        {
          id: 'todo-app',
          title: 'Todo List with Local Storage',
          description: 'Create a full-featured todo application with add, toggle, delete, and filter functionality. Persist data using localStorage.',
          difficulty: 'Intermediate',
          time: '2 hours',
          skills: ['State Management', 'Array Methods', 'Local Storage', 'Forms', 'Filtering'],
          starter: 'https://codesandbox.io/s/react-todo-starter',
          solution: 'https://codesandbox.io/s/react-todo-solution'
        },
        {
          id: 'user-profile',
          title: 'Dynamic User Profile Card',
          description: 'Build a user profile component that displays user information, allows editing in place, and validates form inputs.',
          difficulty: 'Intermediate',
          time: '1.5 hours',
          skills: ['Complex State', 'Form Validation', 'Conditional Rendering', 'Component Composition'],
          starter: 'https://codesandbox.io/s/react-profile-starter',
          solution: 'https://codesandbox.io/s/react-profile-solution'
        }
      ],
      
      quiz: {
        questions: 12,
        passingScore: 80,
        timeLimit: '15 minutes',
        topics: ['Components', 'Props', 'State', 'Events', 'JSX']
      },
      
      relatedTopics: [
        { id: 'react-hooks', title: 'React Hooks & Advanced Patterns', difficulty: 'Intermediate' },
        { id: 'state-management', title: 'State Management with Redux', difficulty: 'Advanced' },
        { id: 'react-router', title: 'React Router for Navigation', difficulty: 'Intermediate' },
        { id: 'testing-react', title: 'Testing React Applications', difficulty: 'Intermediate' }
      ]
    }
  };

  const topic = topicData[topicId as keyof typeof topicData] || topicData['react-basics'];

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'interactive': return <Code className="w-4 h-4" />;
      case 'tool': return <Zap className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-400/10';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
      case 'Advanced': return 'text-red-400 bg-red-400/10';
      default: return 'text-slate-400 bg-slate-400/10';
    }
  };

  // Add enhanced resources from database
  const enhancedResources = getResourcesByTopic(topicId as string);

  return (
    <div className="min-h-screen bg-[var(--gradient-secondary)]">
      {/* Header */}
      <header className="border-b border-slate-800/50 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/roadmaps/frontend">
                <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Roadmap
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-xl font-bold text-white">DevPath</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                <Share className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="text-slate-400 hover:text-yellow-400"
              >
                {isBookmarked ? 
                  <Star className="w-4 h-4 fill-current text-yellow-400" /> : 
                  <Bookmark className="w-4 h-4" />
                }
              </Button>
              <Button 
                onClick={() => setIsCompleted(!isCompleted)}
                className={isCompleted ? 'bg-green-600 hover:bg-green-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'}
              >
                {isCompleted ? <CheckCircle className="w-4 h-4 mr-2" /> : <Circle className="w-4 h-4 mr-2" />}
                {isCompleted ? 'Completed' : 'Mark Complete'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Topic Header */}
        <div className="mb-8">
          <div className="mb-4">
            <Link to="/roadmaps/frontend" className="text-blue-400 hover:text-blue-300 text-sm">
              {topic.roadmap} → {topic.category}
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{topic.title}</h1>
              <h2 className="text-xl text-slate-300 mb-4">{topic.subtitle}</h2>
              <p className="text-lg text-slate-400 mb-6 leading-relaxed">{topic.description}</p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge className={getDifficultyColor(topic.difficulty)}>
                  {topic.difficulty}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  <Clock className="w-3 h-3 mr-1" />
                  {topic.estimatedTime}
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  <BookOpen className="w-3 h-3 mr-1" />
                  {topic.resources.length} resources
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  <Users className="w-3 h-3 mr-1" />
                  {topic.learners} learners
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300">
                  <Star className="w-3 h-3 mr-1" />
                  {topic.rating} ({topic.reviews} reviews)
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {topic.skillsGained.slice(0, 6).map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300">
                    {skill}
                  </Badge>
                ))}
                {topic.skillsGained.length > 6 && (
                  <Badge variant="secondary" className="bg-slate-700/50 text-slate-300">
                    +{topic.skillsGained.length - 6} more
                  </Badge>
                )}
              </div>
            </div>
            
            {/* Progress Sidebar */}
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Your Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-slate-400">Completion</span>
                        <span className="text-white">{userProgress}%</span>
                      </div>
                      <Progress value={userProgress} className="h-2" />
                    </div>
                    <Separator className="bg-slate-700" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Time Spent</span>
                        <span className="text-white">2.5 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Exercises Done</span>
                        <span className="text-white">1 of 4</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Quiz Score</span>
                        <span className="text-white">Not taken</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">Topic Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Completion Rate</span>
                      <span className="text-green-400">{topic.completionRate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Difficulty</span>
                      <Badge className={getDifficultyColor(topic.difficulty)} variant="secondary">
                        {topic.difficulty}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Last Updated</span>
                      <span className="text-white">{topic.lastUpdated}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="content" className="space-y-6">
          <TabsList className="bg-slate-800/50 border border-slate-700">
            <TabsTrigger value="content" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Content
            </TabsTrigger>
            <TabsTrigger value="resources" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Resources ({topic.resources.length})
            </TabsTrigger>
            <TabsTrigger value="exercises" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Exercises ({topic.exercises.length})
            </TabsTrigger>
            <TabsTrigger value="quiz" className="data-[state=active]:bg-slate-700 data-[state=active]:text-white">
              Quiz
            </TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6">
            {/* Overview */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                    {topic.overview}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites & Objectives */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Prerequisites</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start space-x-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span>{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white">Learning Objectives</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {topic.learningObjectives.slice(0, 4).map((objective, index) => (
                      <li key={index} className="flex items-start space-x-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                  {topic.learningObjectives.length > 4 && (
                    <p className="text-slate-400 text-sm mt-3">
                      +{topic.learningObjectives.length - 4} more objectives
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Content Sections */}
            {Object.entries(topic.content).map(([key, section]) => (
              <Card key={key} className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white">{section.title}</CardTitle>
                    <Badge variant="outline" className="border-slate-600 text-slate-400">
                      {section.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-invert max-w-none">
                    <pre className="text-slate-300 leading-relaxed whitespace-pre-line font-sans text-sm">
                      {section.content}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-white mb-2">Learning Resources</h2>
                <p className="text-slate-400 mb-6">
                  Curated resources from top platforms including YouTube, GeeksforGeeks, MDN, and more
                </p>
              </div>

              {/* Enhanced Resources Section */}
              {enhancedResources.length > 0 && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Recommended Resources</h3>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300">
                      {enhancedResources.length} resources
                    </Badge>
                  </div>
                  <div className="grid gap-4">
                    {enhancedResources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>
              )}

              {/* Original Resources (if any) */}
              {topic.resources && topic.resources.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">Additional Resources</h3>
                  <div className="grid gap-4">
                    {topic.resources.map((resource, index) => (
                      <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-colors">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                                {getResourceIcon(resource.type)}
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium text-white mb-1">{resource.title}</h3>
                                <p className="text-slate-400 text-sm mb-3 leading-relaxed">{resource.description}</p>
                                
                                <div className="flex items-center space-x-3 mb-2">
                                  <Badge variant="outline" className="border-slate-600 text-slate-400 text-xs">
                                    {resource.duration}
                                  </Badge>
                                  <Badge className={getDifficultyColor(resource.difficulty)} variant="secondary">
                                    {resource.difficulty}
                                  </Badge>
                                  {resource.free && (
                                    <Badge className="bg-green-600/20 text-green-400 text-xs">
                                      Free
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            </div>
                            <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Open
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="exercises" className="space-y-6">
            <div className="grid gap-6">
              {topic.exercises.map((exercise, index) => (
                <Card key={exercise.id} className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-medium text-white mb-2 text-lg">{exercise.title}</h3>
                        <p className="text-slate-400 mb-4 leading-relaxed">{exercise.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge className={getDifficultyColor(exercise.difficulty)}>
                            {exercise.difficulty}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            <Clock className="w-3 h-3 mr-1" />
                            {exercise.time}
                          </Badge>
                        </div>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {exercise.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Start Exercise
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        <Code className="w-4 h-4 mr-1" />
                        View Starter Code
                      </Button>
                      <Button size="sm" variant="ghost" className="text-slate-400 hover:text-white">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Solution
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Knowledge Check Quiz</CardTitle>
                <CardDescription className="text-slate-400">
                  Test your understanding of React fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Questions</span>
                      <span className="text-white">{topic.quiz.questions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Time Limit</span>
                      <span className="text-white">{topic.quiz.timeLimit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Passing Score</span>
                      <span className="text-white">{topic.quiz.passingScore}%</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Topics Covered</h4>
                    <div className="flex flex-wrap gap-1">
                      {topic.quiz.topics.map((topic) => (
                        <Badge key={topic} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                    <PlayCircle className="w-4 h-4 mr-2" />
                    Start Quiz
                  </Button>
                  <p className="text-slate-400 text-sm">
                    Complete the content sections before taking the quiz
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Topics */}
        <Card className="bg-slate-800/50 border-slate-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">What's Next?</CardTitle>
            <CardDescription className="text-slate-400">
              Continue your learning journey with these related topics
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {topic.relatedTopics.map((relatedTopic) => (
                <Link key={relatedTopic.id} to={`/topics/${relatedTopic.id}`}>
                  <div className="p-4 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:bg-slate-900/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-white mb-1">{relatedTopic.title}</h4>
                        <Badge className={getDifficultyColor(relatedTopic.difficulty)} variant="secondary">
                          {relatedTopic.difficulty}
                        </Badge>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TopicDetail;
