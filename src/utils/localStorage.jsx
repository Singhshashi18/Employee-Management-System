localStorage.clear()
const employees = [
    {
      "id": 1,
      "firstName":"Nitin",
      "email": "employee1@example.com",
      "password": "123",
      "taskCounts":{
          "active":2,
          "new_task":1,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "task_title": "Fix login issue",
          "task_description": "Resolve the bug causing login failures",
          "task_date": "2025-03-13",
          "category": "Bug Fix",
          "active": true, 
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Write API documentation",
          "task_description": "Prepare API documentation for the user module",
          "task_date": "2025-03-15",
          "category": "Documentation",
          "active": false,
          "new_task": false,
          "completed": true,     
          "failed": false
        },
        {
          "task_title": "Code Review",
          "task_description": "Review pull requests for the latest feature",
          "task_date": "2025-03-16",
          "category": "Review",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "firstName":"shashi",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts":{
          "active":2,
          "new_task":1,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "task_title": "Update UI Components",
          "task_description": "Redesign dashboard UI components",
          "task_date": "2025-03-17",
          "category": "UI/UX",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "task_title": "Backend Optimization",
          "task_description": "Optimize database queries for better performance",
          "task_date": "2025-03-18",
          "category": "Backend",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Testing Payment Gateway",
          "task_description": "Ensure proper functionality of Stripe payments",
          "task_date": "2025-03-19",
          "category": "Testing",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "firstName":"Mayank",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts":{
          "active":2,
          "new_task":1,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "task_title": "Email Notifications",
          "task_description": "Implement email notifications for new users",
          "task_date": "2025-03-20",
          "category": "Feature",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Fix Security Vulnerability",
          "task_description": "Resolve the SQL injection issue",
          "task_date": "2025-03-22",
          "category": "Security",
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "firstName":"Virat",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts":{
          "active":2,
          "new_task":1,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "task_title": "Dockerize Application",
          "task_description": "Create Docker configuration for the project",
          "task_date": "2025-03-25",
          "category": "DevOps",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Logging Implementation",
          "task_description": "Add structured logging to backend services",
          "task_date": "2025-03-27",
          "category": "Backend",
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false
        },
        {
          "task_title": "Fix Frontend Bugs",
          "task_description": "Resolve UI inconsistencies on mobile screens",
          "task_date": "2025-03-28",
          "category": "Bug Fix",
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "firstName":"Rohit",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts":{
          "active":2,
          "new_task":1,
          "completed":2,
          "failed":0
      },
      "tasks": [
        {
          "task_title": "Optimize API Calls",
          "task_description": "Reduce API response time using caching",
          "task_date": "2025-03-30",
          "category": "Performance",
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": false
        },
        {
          "task_title": "Improve Accessibility",
          "task_description": "Enhance website accessibility for screen readers",
          "task_date": "2025-04-01",
          "category": "UI/UX",
          "active": false,
          "new_task": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  };
  
  export const setLocalStorage=()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
    const employees=JSON.parse(localStorage.getItem("employees"))
    const admin=JSON.parse(localStorage.getItem("admin"))
    return {employees,admin}
  }