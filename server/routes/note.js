const Router = require('koa-router')
const router = new Router({ prefix: '/note' })
const { AddNoteValidator } = require('../util/validator')
const { auth } = require('../middlewares/auth')
const { success } = require('../util/success') 
const { Note } = require('../db/models/note')

router.post('/add', auth, async (ctx) => {
	const v = await new AddNoteValidator().validate(ctx)
	const note = v.get('body')
	note.author = ctx.auth.id
	// await Note.addNote(note)
	success("新增成功")
})

module.exports = router