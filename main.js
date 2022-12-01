const buttonDataID = 'button[data-button-id="cancel"]';
const buttonName = 'Evaluate';

const modalClass = '.unregistered-dialog';
const divChildrenOrder = 1;
const buttonOrder = 1;


const getButtonByDataID = () => {
    return document.querySelector(buttonDataID);
}

const getButtonByName = () => {
    return document.evaluate(
        `//button[contains(., '${buttonName}')]`,
        document,
        null,
        XPathResult.ANY_TYPE,
        null
    ).iterateNext();
}

const getButtonByParent = () => {
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