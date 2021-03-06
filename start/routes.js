/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.resource('users', 'UserController').apiOnly();

Route.post('sessions', 'SessionController.store');

Route.get('files/:id', 'FileController.show');

Route.group(() => {
  Route.post('files', 'FileController.store');

  Route.resource('groups', 'GroupController').apiOnly();

  Route.resource('courses', 'CourseController').apiOnly();

  Route.resource('courses.lessons', 'LessonController').apiOnly();
}).middleware('auth');
