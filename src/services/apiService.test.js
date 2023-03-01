import {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
  
  } from './apiService';
  import axios from 'axios'

  jest.mock('axios');
  
  describe('API Functions', () => {
    
    describe('getCourses', () => {
      it('returns courses from the API', async () => {
        const courses = [{ id: 1, name: 'Course 1' }, { id: 2, name: 'Course 2' }];
        axios.get.mockResolvedValue({ data: courses });
        const result = await getCourses();
        expect(result).toEqual(courses);
      });
    });
  
    describe('getCourseById', () => {
      it('returns a course by ID from the API', async () => {
        const course = { id: 1, name: 'Course 1' };
        axios.get.mockResolvedValue({ data: course });
        const result = await getCourseById(1);
        expect(result).toEqual(course);
      });
    });
  
    describe('createCourse', () => {
      it('creates a new course on the API', async () => {
        const formData = { name: 'New Course' };
        const createdCourse = { id: 3, name: 'New Course' };
        axios.post.mockResolvedValue({ data: createdCourse });
        const result = await createCourse(formData);
        expect(result).toEqual(createdCourse);
      });
    });
  
    describe('updateCourse', () => {
      it('updates an existing course on the API', async () => {
        const formData = { name: 'Updated Course' };
        const updatedCourse = { id: 1, name: 'Updated Course' };
        axios.put.mockResolvedValue({ data: updatedCourse });
        const result = await updateCourse(1, formData);
        expect(result).toEqual(updatedCourse);
      });
    });
  
    describe('deleteCourse', () => {
      it('deletes a course by ID from the API', async () => {
        const course = { id: 1, name: 'Course 1' };
        axios.delete.mockResolvedValue({ data: course });
        const result = await deleteCourse(1);
        expect(result).toEqual(course);
      });
    });
}
)