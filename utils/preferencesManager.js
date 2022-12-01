
exports.getButtonSelector = () => {
    return app.preferences.get('autoevaluate.button.selector');
}

exports.getButtonName = () => {
    return app.preferences.get('autoevaluate.button.name');
}

exports.getParentClasses = () => {
    const dirtyClasses = app.preferences.get('autoevaluate.parent.classes');
    const formatted = dirtyClasses
        .split(' ')
        .map((e) => e.replace('.', ''))
        .join(' .');
    return `.${formatted}`;
}

exports.getParrentOrderDiv = () => {
    return app.preferences.get('autoevaluate.parent.order.div');
}

exports.getParrentOrderButton = () => {
    return app.preferences.get('autoevaluate.parent.order.button');
}