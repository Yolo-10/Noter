const { User } = require('./models/user')
const { Note } = require('./models/note')
const { Tag } = require('./models/tag')

Note.hasMany(Tag)
Tag.belongsTo(Note)

User.hasMany(Note, { foreignKey: 'author'})
Note.belongsTo(User, { foreignKey: 'author'})