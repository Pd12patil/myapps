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

  // ✅ Added `quizzes` array without changing any other part of the code
  quizzes = [
    { title: 'HTML Basics', buttonText: 'Start' },
    { title: 'CSS Fundamentals', buttonText: 'Start' },
    { title: 'JavaScript Essentials', buttonText: 'Start' },
    { title: 'Angular Basics', buttonText: 'Start' },
    { title: 'React Basics', buttonText: 'Start' },
    { title: 'Node.js Basics', buttonText: 'Start' },
    { title: 'Frontend Frameworks', buttonText: 'Start' },
    { title: 'Web Performance', buttonText: 'Start' }
  ];

  questions = [
    { id: 0, question: 'What does HTML stand for?', 
      options: ['HyperText Markup Language', 'Hyper Transfer Markup Language', 'HighText Machine Language', 'HyperText Multi Language'], 
      correctAnswer: 'HyperText Markup Language' },

    { id: 1, question: 'Which CSS property is used to change text color?', 
      options: ['font-color', 'text-color', 'color', 'background-color'], 
      correctAnswer: 'color' },

    { id: 2, question: 'Which keyword is used to declare a variable in JavaScript?', 
      options: ['var', 'let', 'const', 'All of the above'], 
      correctAnswer: 'All of the above' },

    { id: 3, question: 'Which directive is used for two-way data binding in Angular?', 
      options: ['*ngIf', '[(ngModel)]', '*ngFor', '[ngClass]'], 
      correctAnswer: '[(ngModel)]' },

    { id: 4, question: 'What is the purpose of the Angular CLI command `ng serve`?', 
      options: ['Build the Angular app', 'Start a local development server', 'Deploy the app to production', 'Generate a new component'], 
      correctAnswer: 'Start a local development server' },
  ];

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

  openValidationForm() {  
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

        // ✅ Instead of reloading, directly start the quiz after validation
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

    this.quizStarted = true;
    this.quizCompleted = false;
    this.currentQuestionIndex = 0;
  }

  selectOption(option: string) {
    this.selectedOption = option;
  }

  nextQuestion() {
    if (this.selectedOption) {
      this.userAnswers[this.currentQuestionIndex] = this.selectedOption;
      if (this.selectedOption === this.questions[this.currentQuestionIndex].correctAnswer) {
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
