export const tasks =  [
    {
      "id": 1,
      "title": "Task 1",
      "statement": "Create a web page with an h1 tag that says 'Hello World' and a p tag that says 'Welcome to React'",
      "instruction": "Write your code in the editor below",
      "documentation1": "https://reactjs.org/docs/getting-started.html",
      "documentation2": "https://developer.mozilla.org/en-US/docs/Web/HTML",
      "tests": [
        {
          "name": "Contains <h1>Hello World</h1>",
          "regex": "/<h1>Hello World</h1>/",
          "error": "Expected <h1>Hello World</h1> tag was not found"
        },
        {
          "name": "Contains <p>Welcome to React</p>",
          "regex": "/<p>Welcome to React</p>/",
          "error": "Expected <p>Welcome to React</p> tag was not found"
        }
      ]
    },
    {
      "id": 2,
      "title": "Task 2",
      "statement": "Create a form with an input field and a submit button",
      "instruction": "Write your code in the editor below",
      "documentation1": "https://reactjs.org/docs/forms.html",
      "documentation2": "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form",
      "tests": [
        {
          "name": "Contains <form> tag",
          "regex": "/<form>/",
          "error": "Expected <form> tag was not found"
        },
        {
          "name": "Contains <input> tag",
          "regex": "/<input>/",
          "error": "Expected <input> tag was not found"
        },
        {
          "name": "Contains <button> tag",
          "regex": "/<button>/",
          "error": "Expected <button> tag was not found"
        }
      ]
    }
  ]
  