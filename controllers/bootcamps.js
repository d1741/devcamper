const Bootcamp = require('../models/Bootcamp');
// @desc    Get all bootcamps
// @route   GET to /api/v1/bootcamps
// @access  Public
exports.getBootcamps = (req, res, next) => {
	res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc    Get specific bootcamps
// @route   GET to /api/v1/bootcamps/:id
// @access  Public
exports.getBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Get specific bootcamp: ${req.params.id}` });
};

// @desc    Create new bootcamp
// @route   POST to /api/v1/bootcamps
// @access  Private
exports.createBootcamp = async (req, res, next) => {
	const bootcamp = await Bootcamp.create(req.body);
	res.status(201).json({
		success: true,
		data: bootcamp
	});
};

// @desc    Update bootcamp
// @route   PUT to /api/v1/bootcamps/:id
// @access  Private
exports.updateBootcamp = (req, res, next) => {
	res.status(200).json({
		success: true,
		msg: `Update specific bootcamp: ${req.params.id} `
	});
};

// @desc    Remove bootcamp
// @route   DELETE to /api/v1/bootcamps/:id
// @access  Private
exports.deleteBootcamp = (req, res, next) => {
	res
		.status(200)
		.json({ success: true, msg: `Delete specific bootcamp: ${req.params.id}` });
};
