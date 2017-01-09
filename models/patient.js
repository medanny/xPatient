var db = require('../db');

var Patient = db.model('Patient', {
	firstname : {type: String, required: true},
	m_lastname : {type: String, required: true},
	f_lastname : {type: String, required: true},
	recidency : {type: String, required: true},
	phone : {type: String, required: true},
	age : {type: String, required: true},
	height : {type: String, required: true},
	complexity : {type: String, required: true},
	ideal_weight : {type: String, required: true},
	diabetes : {type: Boolean, required: true},
	hypertension : {type: Boolean, required: true},
	cancer : {type: Boolean, required: true},
	patologies : {type: String, required: true},
	anemia : {type: Boolean, required: true},
	underweight : {type: Boolean, required: true},
	overweight : {type: Boolean, required: true},
	alcahol : {type: Boolean, required: true},
	tabaco : {type: Boolean, required: true},
	drugs : {type: Boolean, required: true},
	food_alergies : {type: String, required: true},
	drug_alergies : {type: String, required: true}
	}
});

module.exports = Patient;