# Space Fixer 🚀

**Space Fixer** is a lightweight, zero-config VS Code extension designed to keep your code clean and readable. Tired of accidental double-spaces or messy alignment? Fix it instantly with a single command.

## ✨ Features

* **Smart Collapse**: Collapses multiple consecutive spaces into a single space.
* **Context Aware**: 
 * **Selection Mode**: If you have text selected (or use multiple cursors), it only fixes those specific areas.
 * **Document Mode**: If nothing is selected, it cleans up the entire file.
* **Safe Trimming**: Uses targeted logic to ensure your newlines and tabs remain untouched—only extra horizontal spaces are removed.

## ⌨️ How to Use

1. Open the **Command Palette** (`F1` or `Ctrl+Shift+P` / `Cmd+Shift+P`).
2. Type **"Fix Spaces"**.
3. Press **Enter**.

### Custom Keyboard Shortcut
To work even faster, add this to your `keybindings.json`:

```json
{
 "key": " ctrl+alt+space",
 "command": "space-fixer.fixSpace",
 "when": "editorTextFocus"
}
```

## 📝 Release Notes

### 1.0.0
* Initial release.
* Added `Fix Spaces` command.
* Full support for multi-cursor and partial selections.

---

**Enjoy a cleaner workspace!**