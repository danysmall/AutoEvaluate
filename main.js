const preferencesManager = require('./utils/preferencesManager');


const getButtonByDataID = () => {
    return document.querySelector(
        preferencesManager.getButtonSelector()
    );
}

const getButtonByName = () => {
    const buttonName = preferencesManager.getButtonName();
    return document.evaluate(
        `//button[contains(., '${buttonName}')]`,
        document,
        null,
        XPathResult.ANY_TYPE,
        null
    ).iterateNext();
}

const getButtonByParent = () => {
    const modalClass = preferencesManager.getParentClasses();
    const divChildrenOrder = preferencesManager.getParrentOrderDiv();
    const buttonOrder = preferencesManager.getParrentOrderButton();

    try {
        return document.querySelector(modalClass)
            .children[divChildrenOrder]
            .children[buttonOrder];
    } catch (e) {
        return null;
    }
}

const getButton = () => {
    return getButtonByDataID() ?? getButtonByName() ?? getButtonByParent();
}

exports.init = () => {
    window.addEventListener('load', () => {
        const button = getButton();
        if (button !== null) {
            button.click();
            app.toast.warning(`"Unregistered dialog" was successfuly removed`);
        } else {
            app.toast.error(`Couldn't find "Unregistered dialog" to remove`);
        }
    });
}