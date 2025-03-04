
/**
 * @class Course
 * @description Generates a Course Model for the database
 * @property {string} course - Course name: required
 * @property {string} courseTitle - Course title: required
 * @property {Array} professors - Professor name: required
 * @property {Array} comments - Array of EvalForm ID linked to the {@link EvalForm} model: optional
 * @property {number} gradeAverage - Grade average: optional
 * @property {number} ratingAverage - Rating average: optional
 * @property {string} courseDescription - Course description: required
 * @property {Array} prerequisites - Prerequisites: required
 * @property {string} _id - Course ID generated automatically
 * @example
 * {
 *   "course": "COSI-21B",
 *   "courseTitle": "Data Structures and Algorithms",
 *   "professors": [ "Iraklis", "Antonella" ],
 *   "comments": [ "64919ed6dc61bc03321359b9", "84919ed6dc6abc03324359b9" ],
 *   "gradeAverage": 4.5,
 *   "ratingAverage": 4.5,
 *   "usefullnessAverage": 4.5,
 *   "difficultyAverage": 4.5,
 *   "courseDescription": "This course introduces the fundamental concepts of data structures and algorithms. Topics include asymptotic analysis, abstract data types, lists, stacks, queues, trees, heaps, priority queues, balanced trees, graphs, sorting and searching, and hashing. The course also covers algorithm design and analysis techniques.",
 *   "prerequisites": [ "COSI-10A", "COSI-12B" ],
 *   "_id": "64919ed6dc61bc03321359b9",
 *   "__v": 0
 * }
 */
import { Schema, model } from 'mongoose';

const courseSchema = Schema({
	course: {
		type: String,
		required: true,
	},
	courseTitle: {
		type: String,
		required: true,
	},
	professors: {
		type: String,
		// type: Array,
		required: true,
	},
	comments: {
		type: [{ type: Schema.Types.ObjectId, ref: 'EvalForm' }],  // Link to EvalForm model to populate data
		default: [],
	},
	gradeAverage: {
		type: {
		  grade: {
			type: Number,
			default: 0
		  },
		  numGrades: {
			type: Number,
			default: 0
		  }
		},
		default: {
		  grade: 0,
		  numGrades: 0
		}
	},
	ratingAverage: {
		type: Number,
		default: 0,
	},
	usefulnessAverage: {
		type: Number,
		default: 0,
	},
	difficultyAverage: {
		type: Number,
		default: 0,
	},
	courseDescription: {
		type: String,
		default: '',
		// required: true,
	},
	prerequisites: {
		type: String,
	},
	requirements: {
		type: Array,
		required: true,
	}
});

export default model('Course', courseSchema);

