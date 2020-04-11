const getters = {
  asyncRouter: state => state.menus.asyncRouter,
  menus: state => state.menus.menus,
  info: state => state.user.info,
  isCollapse: state => state.app.isCollapse
}

export default getters