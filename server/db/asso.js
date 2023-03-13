const { User } = require('./models/user')
const { Note } = require('./models/note')
const { Tag } = require('./models/tag')
const { Comment } = require('./models/comment')
const { Favor } = require('./models/favor')

Note.hasMany(Tag)
Tag.belongsTo(Note)

User.hasMany(Note, { foreignKey: 'author'})
Note.belongsTo(User, { foreignKey: 'author'})