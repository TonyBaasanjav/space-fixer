// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

  const outputChannel = vscode.window.createOutputChannel("Space Fixer");
  outputChannel.appendLine('Congratulations, your extension "space-fixer" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('space-fixer.fixSpace', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    // vscode.window.showInformationMessage('Spaces fixed!');
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      outputChannel.appendLine("no active text editor!");
      return;
    }
    const document = editor.document;
    const selections = editor.selections;

    
      if (selections.length > 1 || (selections.length === 1 && !selections[0].isEmpty)) {
        selections.forEach(selection => {
        	const text = document.getText(selection);
        	const extraSpaceRemovedText = text.replace(/ {2,}/g, ' ');
			if(text === extraSpaceRemovedText) {
				outputChannel.appendLine("No multiple spaces found.");
		  	}
			editor.edit(editBuilder => {
				editBuilder.replace(selection, extraSpaceRemovedText);
			}).then(success => {
				if(success) {
					outputChannel.appendLine("Selected range spaces fixed!")
				} else {
        			outputChannel.appendLine('Edit failed to apply.');
				}
			});
        });
      } else {
		const documentStartPosition = document.positionAt(0);
        const documentEndPosition = document.positionAt(document.getText().length);
        const entireDocument = new vscode.Range(documentStartPosition, documentEndPosition);
        const text = document.getText(entireDocument);
        const extraSpaceRemovedText = text.replace(/ {2,}/g, ' ');
		if(text === extraSpaceRemovedText) {
			outputChannel.appendLine("No multiple spaces found.");
		}
		editor.edit(editBuilder => {
        	editBuilder.replace(entireDocument, extraSpaceRemovedText);
    	}).then(success => {
				if(success) {
					outputChannel.appendLine("Entire document spaces fixed!, documentStartPosition:" + JSON.stringify(documentStartPosition) + ", documentEndPosition: " + JSON.stringify(documentEndPosition));
				} else {
        			outputChannel.appendLine('Edit failed to apply.');
				}
			});
      }
	
  });

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}