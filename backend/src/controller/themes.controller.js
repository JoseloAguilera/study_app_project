const ThemeService = require("../service/themes.service");

const listar = async function (req, res) {
    console.log("listar temas");
    try {
        const themes = await ThemeService.listar(req.query.filtro || '');
        console.log("themes", themes);
        if (themes) {
            res.json({
                success: true,
                temas: themes
            });
        } else {
            res.json({
                success: true,
                temas: []
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

const buscarPorCodigo = async function (req, res) {
    console.log("consultar tema");
    try {
        const themeModelResult = await ThemeService.buscarPorCodigo(req.params.id);
        if (themeModelResult) {
            res.json({
                success: true,
                tema: themeModelResult
            });
        } else {
            res.json({
                success: true,
                tema: null
            });
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

const actualizar = async function (req, res) {
    console.log("actualizar tema");
    let temaRetorno = null;

    try {
        temaRetorno = await ThemeService.actualizar(req.body.id, req.body.create_date, req.body.name, 
                                                    req.body.description, req.body.keywords, 
                                                    req.body.owner_user_id);
        res.json({
            success: true,
            tema: temaRetorno
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.messages
        });
    }
};

const eliminar = async function (req, res) {
    console.log("eliminar tema");

    try {
        //ThemeModel.destroy(req.params.id);
        const themes = await ThemeService.eliminar(req.params.id);
        console.log("tema eliminado");
        res.json({
            success: true
        });
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        });
    }
};

module.exports = {
    listar, buscarPorCodigo, actualizar, eliminar
};