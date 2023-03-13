const Router = require('koa-router')
const router = new Router({ prefix: '/note' })
const { Note } = require('@/db/models/note')
const { auth } = require('@/middlewares/auth')
const { AddNoteValidator } = require('@/util/validator')
const { success } = require('@/util/success') 

router.post('/add', auth, async (ctx) => {
	const v = await new AddNoteValidator().validate(ctx)
	const note = v.get('body')
	note.author = ctx.auth.id
	await Note.addNote(note)
	success("新增成功")
})

router.get('/list', async () => {
	const notes = await Note.showAllNotes();
	success(false, notes);
});

router.get('/hotList', async () => {
	const notes = await Note.showHotNotes();
	success(false, notes);
});

router.get('/myList', auth, async (ctx) => {
	const notes = await Note.showMyNotes(ctx.auth.id);
	success(false,notes)
})
  
module.exports = router