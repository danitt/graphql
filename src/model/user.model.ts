import * as mongoose from 'mongoose'

export interface userSchema {
	_id?: string,
	name: string
}

const userSchema = new mongoose.Schema({
	name: { type: String, trim: true, default: `Anonymous` }
}, {
		toJSON: { virtuals: true, getters: true },
		toObject: { virtuals: true, getters: true },
	})

let User
try { User = mongoose.model("User") }
catch (e) {
	User = mongoose.model('User', userSchema)
	User.on('index', err => { if (err) console.log('index event err', err) })
}

export default User
