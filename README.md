# AutoEvaluate — Extension for StarUML

Extension for StarUML to autoclick "Evaluate" button on startup if you use unregistered version.
You don't need to do anything.Extension will click "Evaluate" button automaticly and send to you message of result:
- `Yellow` message if it was successful
- `Red` message is something went wrong

## Restrictions
This extension was tested with StarUML Version `5.0.2` but it also should work on every version since `3.0.X`

## Instalation guide
How to install and use this extension.
1. Open StarUML
2. Go to top context menu
3. Click `Tools -> Extension Manages`
4. In the lower left corner click the button `Install From Uri...`
5. Enter the link `https://github.com/danysmall/AutoEvaluate`
6. Restart application
    - By pressing combination `Ctrl + R`
    - Or just close and run it again

## Preferences
This extension has preferences for setup search. To go to the preferences just follow:
- Top context menu
- `File -> Preferences...`
- Pick `AutoEvaluate`
- Setup for your needs

### Description of preferences
#### Button settings
**QuerySelector** — the JavaScript selector which will be evaluated by `document.querySelector` function to find button and click it
**Button name** — displaying name of the button. Will be used in `XPATH` search if `QuerySelector` won't work
#### Modal settings
If methods above don't work than button will be find by parametrs of dialog view
**Classes of modal** — is a list of classes divided by space. They will be formatter for `document.querySelector` function to find `Node` with modal
**Order of child <div>** — is for specify in which container button is located.
**Order of "Evaluate"** — if order of all buttons in `<div>` container to choose and click on it

> To find all of these settings by youself you can just open DevTools by clicking `Alt + Shift + T` or going to the `Top Menu Bar -> Debug -> Show DevTools` and find all variables by source code and console


## License
This software is under `MIT License` with `Copyright (c) 2022 Danila Smolyakov`

Read full license file by [this link](LICENSE)