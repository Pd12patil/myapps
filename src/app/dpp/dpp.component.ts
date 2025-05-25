import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dpp',
  templateUrl: './dpp.component.html',
  styleUrls: ['./dpp.component.css']
})
export class DppComponent implements OnInit {
  quizStarted = false;
  quizCompleted = false;
  currentQuestionIndex = 0;
  selectedOption: string | null = null;
  score = 0;
  userAnswers: { [key: number]: string } = {};
  isLoggedIn = false;
  showValidationForm = false;

  email = '';
  password = '';
  errorMessage = '';
  selectedQuizTitle = '';

  quizzes = [
    { title: 'HTML Basics', buttonText: 'Start' },
    { title: 'CSS Fundamentals', buttonText: 'Start' },
    { title: 'JavaScript Essentials', buttonText: 'Start' },
    { title: 'Angular Basics', buttonText: 'Start' },
    { title: 'React Fundamentals', buttonText: 'Start' },
    { title: 'Node.js Basics', buttonText: 'Start' },
    { title: 'TypeScript Essentials', buttonText: 'Start' },
    { title: 'Web Development Best Practices', buttonText: 'Start' }
  ];

  allQuestions: { [key: string]: any[] } = {
    'HTML Basics': [
      { id: 0, question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'Hyper Transfer Markup Language', 'HighText Machine Language', 'HyperText Multi Language'], correctAnswer: 'HyperText Markup Language' },
      { id: 1, question: 'What is the correct HTML element for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<line>'], correctAnswer: '<br>' },
      { id: 2, question: 'Which tag is used to create a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], correctAnswer: '<a>' },
      { id: 3, question: 'How can you make a numbered list?', options: ['<ul>', '<ol>', '<li>', '<list>'], correctAnswer: '<ol>' },
      { id: 4, question: 'HTML files are saved with which extension?', options: ['.html', '.ht', '.web', '.doc'], correctAnswer: '.html' }
    ],
    'CSS Fundamentals': [
      { id: 0, question: 'Which CSS property is used to change text color?', options: ['font-color', 'text-color', 'color', 'background-color'], correctAnswer: 'color' },
      { id: 1, question: 'Which is the correct syntax to select an element with id "header"?', options: ['#header', '.header', 'header', '*header'], correctAnswer: '#header' },
      { id: 2, question: 'Which property is used to change the background color?', options: ['color', 'bgcolor', 'background-color', 'background'], correctAnswer: 'background-color' },
      { id: 3, question: 'How do you make text bold in CSS?', options: ['font-weight: bold;', 'style: bold;', 'text-style: bold;', 'font: bold;'], correctAnswer: 'font-weight: bold;' },
      { id: 4, question: 'How do you include an external CSS file?', options: ['<link rel="stylesheet" href="style.css">', '<style src="style.css">', '<css href="style.css">', '<stylesheet>style.css</stylesheet>'], correctAnswer: '<link rel="stylesheet" href="style.css">' }
    ],
    'JavaScript Essentials': [
      { id: 0, question: 'Which keyword is used to declare a variable?', options: ['var', 'let', 'const', 'All of the above'], correctAnswer: 'All of the above' },
      { id: 1, question: 'How do you write a comment in JavaScript?', options: ['// comment', '<!-- comment -->', '# comment', '** comment **'], correctAnswer: '// comment' },
      { id: 2, question: 'Which operator is used for equality comparison?', options: ['==', '=', '===', '!='], correctAnswer: '===' },
      { id: 3, question: 'What is the result of typeof null?', options: ['object', 'null', 'undefined', 'boolean'], correctAnswer: 'object' },
      { id: 4, question: 'How do you call a function named "myFunction"?', options: ['call myFunction()', 'myFunction()', 'myFunction.call()', 'Call.myFunction()'], correctAnswer: 'myFunction()' }
    ],
    'Angular Basics': [
      { id: 0, question: 'Which directive is used for two-way data binding?', options: ['*ngIf', '[(ngModel)]', '*ngFor', '[ngClass]'], correctAnswer: '[(ngModel)]' },
      { id: 1, question: 'What does CLI stand for in Angular CLI?', options: ['Command Line Interface', 'Component Logic Interface', 'Control Load Injector', 'Client Library Integration'], correctAnswer: 'Command Line Interface' },
      { id: 2, question: 'What is the purpose of `ng serve`?', options: ['Deploy the app', 'Start a local server', 'Create a new component', 'Update the Angular version'], correctAnswer: 'Start a local server' },
      { id: 3, question: 'Which decorator is used to define a component?', options: ['@Component', '@Injectable', '@NgModule', '@Directive'], correctAnswer: '@Component' },
      { id: 4, question: 'Which lifecycle hook is called once after the first ngOnChanges?', options: ['ngOnInit', 'ngDoCheck', 'ngAfterViewInit', 'ngAfterContentInit'], correctAnswer: 'ngOnInit' }
    ],
    'React Fundamentals': [
      { id: 0, question: 'What is the primary purpose of React?', options: ['Building user interfaces', 'Managing databases', 'Creating server-side applications', 'Designing graphics'], correctAnswer: 'Building user interfaces' },
      { id: 1, question: 'Which method is used to update the state in a React component?', options: ['setState()', 'updateState()', 'changeState()', 'modifyState()'], correctAnswer: 'setState()' },
      { id: 2, question: 'What is JSX?', options: ['JavaScript XML', 'JavaScript Extension', 'JavaScript Xtreme', 'JavaScript XSS'], correctAnswer: 'JavaScript XML' },
      { id: 3, question: 'How do you create a functional component in React?', options: ['function MyComponent() {}', 'class MyComponent extends React.Component {}', '<MyComponent />', '@Component MyComponent {}'], correctAnswer: 'function MyComponent() {}' },
      { id: 4, question: 'What is the purpose of keys in React lists?', options: ['To uniquely identify elements', 'To style elements', 'To manage state', 'To handle events'], correctAnswer: 'To uniquely identify elements' }
    ],
    'Node.js Basics': [
      { id: 0, question: 'What is Node.js primarily used for?', options: ['Building server-side applications', 'Creating mobile apps', 'Designing graphics', 'Managing databases'], correctAnswer: 'Building server-side applications' },
      { id: 1, question: 'Which module is used to create a web server in Node.js?', options: ['http', 'fs', 'path', 'url'], correctAnswer: 'http' },
      { id: 2, question: 'What is the purpose of npm?', options: ['Node Package Manager', 'Node Process Manager', 'Node Performance Monitor', 'Node Project Manager'], correctAnswer: 'Node Package Manager' },
      { id: 3, question: 'How do you install a package using npm?', options: ['npm install package-name', 'npm get package-name', 'npm add package-name', 'npm fetch package-name'], correctAnswer: 'npm install package-name' },
      { id: 4, question: 'What is the default port for a Node.js server?', options: ['3000', '8080', '5000', '4000'], correctAnswer: '3000' }
    ],
    'TypeScript Essentials': [
      { id: 0, question: 'What is TypeScript?', options: ['A superset of JavaScript', 'A programming language', 'A database', 'A framework'], correctAnswer: 'A superset of JavaScript' },
      { id: 1, question: 'Which keyword is used to define a type in TypeScript?', options: ['type', 'interface', 'class', 'enum'], correctAnswer: 'interface' },
      { id: 2, question: 'How do you declare a variable with a specific type in TypeScript?', options: ['let variableName: type;', 'var variableName = type;', 'const variableName: type;', 'type variableName = value;'], correctAnswer: 'let variableName: type;' },
      { id: 3, question: 'What is the purpose of interfaces in TypeScript?', options: ['To define the structure of an object', 'To create classes', 'To manage state', 'To handle events'], correctAnswer: 'To define the structure of an object' },
      { id: 4, question: 'How do you compile TypeScript to JavaScript?', options: ['tsc filename.ts', 'tsc filename.js', 'tsc filename', 'tsc compile filename'], correctAnswer: 'tsc filename.ts' }
    ],
    'Web Development Best Practices': [
      { id: 0, question: 'What is the purpose of responsive design?', options: ['To make websites look good on all devices', 'To improve website speed', 'To enhance SEO', 'To secure user data'], correctAnswer: 'To make websites look good on all devices' },
      { id: 1, question: 'Which of the following is a best practice for web performance?', options: ['Minifying CSS and JavaScript', 'Using large images', 'Avoiding caching', 'Using inline styles'], correctAnswer: 'Minifying CSS and JavaScript' },
      { id: 2, question: 'What is the purpose of semantic HTML?', options: ['To improve accessibility and SEO', 'To make websites look better', 'To reduce file size', 'To enhance JavaScript functionality'], correctAnswer: 'To improve accessibility and SEO' },
      { id: 3, question: 'Which HTTP method is used to retrieve data from a server?', options: ['GET', 'POST', 'PUT', 'DELETE'], correctAnswer: 'GET' },
      { id: 4, question: 'What is the purpose of using version control systems like Git?', options: ['To track changes in code', 'To improve website speed', 'To enhance SEO', 'To secure user data'], correctAnswer: 'To track changes in code' }
    ]
  };

  questions: any[] = [];

  ngOnInit() {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const storedUser = localStorage.getItem('user');
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (storedUser && loggedInStatus === 'true') {
      this.isLoggedIn = true;
    }
  }

  openValidationForm(title: string) {
    this.selectedQuizTitle = title;
    this.showValidationForm = true;
  }

  validateUser() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const { email, password } = JSON.parse(storedUser);
      if (this.email === email && this.password === password) {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true');
        this.showValidationForm = false;
        this.startQuiz();
      } else {
        this.errorMessage = 'Invalid email or password';
        window.alert(this.errorMessage);
      }
    } else {
      this.errorMessage = 'No registered user found';
      window.alert(this.errorMessage);
    }
  }

  startQuiz() {
    if (!this.isLoggedIn) {
      window.alert('Please log in first to start the quiz!');
      return;
    }

    this.questions = this.allQuestions[this.selectedQuizTitle] || [];
    this.quizStarted = true;
    this.quizCompleted = false;
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.userAnswers = {};
    this.selectedOption = null;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption !== null) {
      const currentQ = this.questions[this.currentQuestionIndex];
      this.userAnswers[currentQ.id] = this.selectedOption;
      if (this.selectedOption === currentQ.correctAnswer) {
        this.score += 2;
      }
    }

    this.selectedOption = null;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.questions.length) {
      this.quizCompleted = true;
      this.quizStarted = false;
    }
  }
}


