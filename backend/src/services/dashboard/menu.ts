import MenuModel from '../../models/menu';

const lstMenu = async () => {
    const menu = MenuModel.find({});
    if(!menu){
        return false;
    }
    return menu;
}


export { lstMenu };