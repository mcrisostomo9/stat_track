module.exports = (sequelize, Datatypes) => {
  let Setting = sequelize.define('settings', {
    favoriteTeam: {
      type: Datatypes.STRING,
      allowNull: true
    }
  })

  return Setting
}