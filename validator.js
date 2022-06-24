/**
 * Duomenu objekto validatorius, kuris tikrina, ar duomenu objekte yra tik leistini raktazodziai.
 * 
 * Objekte gali buti ir papildomu neprivalomu, bet vis vien leistinu raktazodziu (optional keys)
 * @param {Object} obj Duomenu objektas
 * @returns {[boolean, string]} Rezultatas, kur pirmasis parametras reiskia ar buvo rasta klaida, o antrasis - zinute (aprasanti klaida)
 */
function validator(obj) {

    if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
        return [true, 'Neduotas objektas']
    }

    if (typeof rules !== 'object' || rules === null || Array.isArray(rules)) {
        return [true, 'Neduotas strukturos objektas']
    }



    return [false, 'OK']
}

module.exports = validator;