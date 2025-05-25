import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'Angular Basics',
      description: 'Learn the basics of Angular framework.',
      price: 4999,
      image: './assets/Angular.png'
    },
    {
      id: 2,
      title: 'React Essentials',
      description: 'Master the fundamentals of React.',
      price: 4999,
      image:'./assets/React.png',
    },
    {
      id: 3,
      title: 'Java for Beginner',
      description: 'Learn the core concepts of Java,',
      price: 2999,
      image: './assets/java.png'
    },
    {
      id: 4,
      title: 'MERN Stack Web developer',
      description: 'Learn Mongodb Express.js React.js Node,',
      price: 5999,
      image: './assets/Mern.png'   
     },
    {
     id: 5,
      title: 'Javascript Tutorials',
      description: 'Learn the core concepts of Java,',
      price: 2999,
      image: './assets/javascript.png'    
    },
    {
      id: 6,
       title: 'Artificial Intelligence',
       description: 'Dive into the world of AI and machine learning',
       price: 5999,
       image: './assets/AI.png'     
      },
{
     id: 7,
     title: 'MEAN',
     description: 'Learn MongoDb Express.js Angular.js node.js,',
     price: 5999,
     image: './assets/Mean.jpeg'   
    },
   {
    id: 8,
    title: 'AWS',
    description: 'Learn Amazon Cloud Services,',
    price: 5999,
    image: './assets/AWS.png'  },
  {
    id: 9,
    title: 'Data Science with python ',
    description: 'Learn  Data Science with python',
    price: 5999,
    image: './assets/Python.jpeg'  },

  ];

  constructor(private router: Router) {}

  enroll(course: any) {
    this.router.navigate(['/billing'], { state: { selectedCourse: course } });
  }

  explore(courseId: number) {
    this.router.navigate(['/course-detail', courseId]);
  }
}
